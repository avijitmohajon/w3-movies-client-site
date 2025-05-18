import { useState, useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaSearch, FaStar, FaRegClock, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AllMovies = () => {
  const movies = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const { isDarkMode } = useContext(AuthContext);

  // Filter movies based on search input
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!movies || movies.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen px-4 py-8 transition-colors duration-300 ${
        isDarkMode ? "bg-[#1D232A] text-gray-100" : "bg-base-300 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-3xl font-bold p-4 rounded-lg ${
              isDarkMode
                ? "border-green-400 text-green-400"
                : "border-green-600 text-green-600"
            }`}
          >
            All Movies
          </motion.h2>

          <div
            className={`flex items-center space-x-2 rounded-full p-2 ${
              isDarkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            } border`}
          >
            <FaSearch className="ml-2" />
            <input
              type="text"
              placeholder="Search Movies..."
              className={`flex-1 p-2 outline-none ${
                isDarkMode
                  ? "bg-gray-800 placeholder-gray-400"
                  : "bg-white placeholder-gray-500"
              } rounded-full`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <motion.div
                key={movie._id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{
                  y: -5,
                  boxShadow: isDarkMode
                    ? "0 10px 25px -5px rgba(156, 255, 95, 0.2)"
                    : "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                className={`rounded-xl overflow-hidden transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white hover:bg-gray-50"
                } shadow-md`}
              >
                {/* Movie Poster */}
                <div className="relative group">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full  aspect-[11/12] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Link
                        to={`/detailspage/${movie._id}`}
                        className={`inline-block px-4 py-2 rounded-full ${
                          isDarkMode
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-green-600 hover:bg-green-700"
                        } text-white font-medium`}
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Movie Details */}
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 truncate">
                    {movie.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {Array.isArray(movie.genre) ? (
                      movie.genre.slice(0, 2).map((genre, index) => (
                        <span
                          key={index}
                          className={`text-xs px-2 py-1 rounded-full ${
                            isDarkMode
                              ? "bg-gray-700 text-green-400"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {genre}
                        </span>
                      ))
                    ) : (
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          isDarkMode
                            ? "bg-gray-700 text-green-400"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {movie.genre}
                      </span>
                    )}
                    {Array.isArray(movie.genre) && movie.genre.length > 2 && (
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          isDarkMode
                            ? "bg-gray-700 text-green-400"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        +{movie.genre.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <FaStar
                        className={`${
                          isDarkMode ? "text-yellow-400" : "text-yellow-500"
                        }`}
                      />
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
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p
                className={`text-xl ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                No movies found matching "{searchQuery}"
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className={`mt-4 px-4 py-2 rounded-lg ${
                  isDarkMode
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-green-500 hover:bg-green-600"
                } text-white`}
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
