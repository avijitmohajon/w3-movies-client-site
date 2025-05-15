import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaFilm, FaHome, FaTicketAlt } from "react-icons/fa";

const Error = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const popVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Floating film strips */}
      <motion.div
        className="absolute top-10 left-10 opacity-10"
        animate={{
          rotate: [0, 360],
          x: [0, 20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <FaFilm className="text-6xl" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 opacity-10"
        animate={{
          rotate: [360, 0],
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <FaFilm className="text-8xl" />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="text-center max-w-3xl z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={popVariants}>
          <div className="text-9xl font-bold mb-4 relative">
            <span className="text-yellow-400">4</span>
            <motion.span
              className="inline-block"
              animate={{
                rotate: [0, 10, -10, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              0
            </motion.span>
            <span className="text-yellow-400">4</span>
          </div>
        </motion.div>

        <motion.h1 className="text-4xl font-bold mb-6" variants={itemVariants}>
          Movie Trouble!
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 mb-8"
          variants={itemVariants}
        >
          The movie you're looking for seems to have left the theater. Maybe
          it's in production or on an extended intermission.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          variants={itemVariants}
        >
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-colors"
          >
            <FaHome /> Go Home
          </button>
          <button
            onClick={() => navigate("/allmovies")}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            <FaFilm /> Browse Movies
          </button>
        </motion.div>

        <motion.div
          className="mt-8 p-4 bg-gray-800 rounded-lg max-w-md mx-auto"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3">
            <FaTicketAlt className="text-yellow-400 text-2xl" />
            <div>
              <h3 className="font-bold">Pro Tip</h3>
              <p className="text-sm text-gray-300">
                Check your spelling or try different keywords. Our search is
                case-sensitive.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Projector light effect */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-20"></div>
    </div>
  );
};

export default Error;
