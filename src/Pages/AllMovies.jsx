import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const AllMovies = () => {
  const movies = useLoaderData();

  const [searchQuery, setSearchQuery] = useState("");

  // Filter movies based on search input
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!movies || movies.length === 0) {
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

  return (
    <div className="min-h-screen px-5 py-10">
      <h2 className="text-center text-3xl font-bold mb-8 p-4 text-white border border-[#9cff5f] border-l-[15px] border-r-[15px] rounded-lg">
        All Movies
      </h2>

      {/* Search Bar */}

      <div className="flex w-72  items-right  space-x-2 border border-white rounded-md p-2  mb-6 ">
        <FaSearch className="mt-3" />
        <input
          type="text"
          placeholder="Search Movies"
          className="flex-1 p-2 outline-none bg-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div
              key={movie._id}
              className="card bg-glass shadow-xl p-4 border rounded-lg"
            >
              {/* Movie Poster */}
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-[500px] object-cover rounded-lg border"
              />

              {/* Movie Details */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{movie.title}</h3>
                <p className="text-lg">
                  Genre:{" "}
                  {Array.isArray(movie.genre)
                    ? movie.genre.join(", ")
                    : movie.genre}
                </p>
                <p className="text-lg">Duration: {movie.duration} min</p>
                <p className="text-lg">Release Year: {movie.releaseYear}</p>
                <p className="text-lg">Rating: ⭐ {movie.rating}</p>

                {/* See Details Button */}
                <Link
                  to={`/detailspage/${movie._id}`}
                  className="btn btn-outline bg-black hover:bg-black hover:text-white mt-3 w-full"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No movies found
          </p>
        )}
      </div>
    </div>
  );
};

export default AllMovies;
