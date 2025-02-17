import React from 'react';

// import AllMovies from "./AllMovies";
import { Link } from "react-router-dom";
const Trending = ({movies}) => {
    if (!movies || movies.length === 0) {
        return <div>no movie found</div>; 
      }
     
      const topMovies = [...movies].sort((a, b) => b.releaseYear - a.releaseYear).slice(0, 3);
    return (
        <div className="container mx-auto ">
        <h2 className="text-2xl lg:text-5xl font-bold my-4 md:my-10 lg:my-16 text-center bg-[#0aec4a] text-base-200 lg:py-5">New Release Movies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-auto ">
          {topMovies.map((movie) => (
            <div key={movie._id} className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full md:h-[500px] h-64 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-2">{movie.title}</h3>
              <p className="text-sm text-gray-400">
                Genre: {movie.genre}
              </p>
              <p className="text-sm text-gray-400">
                Duration: {movie.duration} min
              </p>
              <p className="text-sm text-gray-400">
                Release Year: {movie.releaseYear}
              </p>
              <p className="text-yellow-400 font-bold">⭐ {movie.rating}</p>
              <Link to={`/detailspage/${movie._id}`} className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition btn btn-block ">
                See Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Trending;