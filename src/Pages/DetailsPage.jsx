import React, { useState, useEffect } from "react";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever, MdHome } from "react-icons/md";
import { InfinitySpin } from "react-loader-spinner";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const DetailsPage = () => {
  const Navigate = useNavigate();
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/updatemovies`);
        const data = await response.json();

        // Find the movie with the matching ID
        const movieData = data.find((movie) => movie._id === id);
        setMovie(movieData);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [id]);

  // Loading state handling
  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <InfinitySpin
          visible={true}
          width="200"
          color="#4fa94d"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  }

  // Check if movie data exists
  if (!movie) {
    return <div>Movie not found</div>;
  }

  const handleDelete = (_id) => {
    // console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/updatemovies/${_id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Movie has been deleted.",
                icon: "success",
              });
              Navigate("/allmovies");
            }
          });
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 border border-l-8 border-r-8 shadow-lg rounded-lg md:flex md:items-center">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full md:w-1/2 h-96 object-cover rounded-md "
      />
      <div className="md:ml-6 flex gap-5 mt-5">
        <div className="flex flex-col  ">
          <h1 className="text-3xl font-bold mt-4 md:mt-0">{movie.title}</h1>
          <p className="text-lg font-medium mt-2">Genre: {movie.genre}</p>
          <p className="text-lg font-medium ">Duration: {movie.duration} min</p>
          <p className="text-lg font-medium ">
            Release Year: {movie.releaseYear}
          </p>
          <p className="mt-4">{movie.summary}</p>
        </div>

        <div className="flex flex-col justify-between mt-5 md:mt-0">
          <Link
            className="btn rounded-lg bg-green-500 text-xl text-black "
            to="/"
          >
            <MdHome />
          </Link>
          <Link
            onClick={() => handleDelete(movie._id)}
            className="btn rounded-lg text-xl text-black bg-red-500 "
          >
            <MdDeleteForever />
          </Link>
          <Link to={`/updatemovie/${movie._id}`} className="btn rounded-lg text-xl text-black bg-yellow-500">
            <GrUpdate />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
