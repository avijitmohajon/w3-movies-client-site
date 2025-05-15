import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaUserAlt, FaFilm } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, logout, setIsDarkMode, isDarkMode } = useContext(AuthContext);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/allmovies", label: "All Movies" },
    { path: "/release", label: "New Releases" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="navbar bg-base-300 text-base-content sticky top-0 z-50 shadow-lg px-4 sm:px-6 lg:px-8"
    >
      {/* Mobile menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <motion.div
            whileTap={{ scale: 0.9 }}
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.div>
          <motion.ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 space-y-2"
            variants={containerVariants}
          >
            {navLinks.map((link, index) => (
              <motion.li key={index} variants={itemVariants}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `btn btn-ghost justify-start ${
                      isActive ? "text-primary" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.li>
            ))}
            <motion.li variants={itemVariants}>
              {user ? (
                <button
                  onClick={logout}
                  className="btn btn-error btn-outline w-full"
                >
                  Logout
                </button>
              ) : (
                <div className="flex flex-col gap-2">
                  <NavLink to="/login" className="btn btn-primary btn-outline">
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="btn btn-secondary btn-outline"
                  >
                    Register
                  </NavLink>
                </div>
              )}
            </motion.li>
          </motion.ul>
        </div>

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <FaFilm className="text-2xl text-primary" />
          <div>
            <h1 className="text-xs md:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              W3<span className="text-accent">Movies</span>
            </h1>
            <p className="text-xs font-semibold">World Wide Web</p>
          </div>
        </motion.div>
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <motion.ul
          className="menu menu-horizontal gap-2"
          variants={containerVariants}
        >
          {navLinks.map((link, index) => (
            <motion.li key={index} variants={itemVariants}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `btn btn-ghost ${
                    isActive ? "text-primary font-bold" : ""
                  } hover:bg-base-300 hover:link-hover`
                }
              >
                {link.label}
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Right side controls */}
      <div className="navbar-end gap-4">
        {/* Theme toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="btn btn-circle btn-ghost"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <MdLightMode className="text-2xl text-warning" />
          ) : (
            <MdDarkMode className="text-2xl" />
          )}
        </motion.button>

        {/* User dropdown */}
        <div className="dropdown dropdown-end">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar border border-base-content"
          >
            <div className="w-10 rounded-full">
              {user ? (
                <img
                  src={
                    user.photoURL ||
                    `https://ui-avatars.com/api/?name=${
                      user.displayName || "User"
                    }&background=random`
                  }
                  alt="User"
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-base-200">
                  <FaUserAlt className="text-lg" />
                </div>
              )}
            </div>
          </motion.div>

          <motion.ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-200 rounded-box w-64 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <li className="text-center font-bold border-b pb-2">
              {user ? user.displayName || "User" : "Guest"}
            </li>

            {user ? (
              <>
                <li className="text-sm">
                  <span className="font-semibold">Email:</span> {user.email}
                </li>
                <li className="text-sm">
                  <span className="font-semibold">Last Login:</span>{" "}
                  {new Date(user.metadata.lastSignInTime).toLocaleString()}
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="btn btn-error btn-sm w-full mt-2"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <div className="flex flex-col gap-2">
                <NavLink to="/login" className="btn bg-green-600 hover:bg-green-400 btn-sm w-full text-white">
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="btn bg-blue-600 hover:bg-blue-400 btn-sm w-full text-white"
                >
                  Register
                </NavLink>
              </div>
            )}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
