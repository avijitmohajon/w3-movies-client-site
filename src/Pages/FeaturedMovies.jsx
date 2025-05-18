import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegClock, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const FeaturedMovies = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="text-xl text-gray-500">No movies found</div>
      </div>
    );
  }

  const topMovies = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 6);

  return (
    <div className="px-4 py-8 md:py-12 lg:py-16 bg-base-100">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-blue-600 py-2 "
        >
          Top Rated Movies
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {topMovies.map((movie) => (
            <motion.div
              key={movie._id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
              className="rounded-xl overflow-hidden shadow-lg bg-base-200 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Movie Poster */}
              <div className="relative group">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Link
                      to={`/detailspage/${movie._id}`}
                      className="inline-block px-4 py-2 rounded-full bg-primary hover:bg-primary-focus text-white font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>

              {/* Movie Details */}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 truncate">{movie.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {Array.isArray(movie.genre) ? (
                    movie.genre.slice(0, 2).map((genre, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 rounded-full bg-base-300 text-base-content"
                      >
                        {genre}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs px-2 py-1 rounded-full bg-base-300 text-base-content">
                      {movie.genre}
                    </span>
                  )}
                  {Array.isArray(movie.genre) && movie.genre.length > 2 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-base-300 text-base-content">
                      +{movie.genre.length - 2}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar />
                    <span>{movie.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaRegClock />
                    <span>{movie.duration}m</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt />
                    <span>{movie.releaseYear}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {topMovies.length > 0 && (
          <div className="text-center mt-10">
            <Link 
              to="/allmovies" 
              className="btn btn-primary px-8 py-3 text-lg"
            >
              View All Movies
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedMovies;