import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../AuthProvider/AuthProvider";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const { user, logout, setIsDarkMode, isDarkMode } = useContext(AuthContext);
  // console.log(user);
  const common = (
    <>
      <li>
        <NavLink to="/" className="btn btn-outline">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allmovies" className="btn btn-outline">
          All Movies
        </NavLink>
      </li>
      <li>
        <NavLink to="/release" className="btn btn-outline">
          New Release Movies
        </NavLink>
      </li>

      <li>
        {user && user?.email ? (
          <button onClick={logout} className="btn btn-outline">
            logout
          </button>
        ) : (
          <div className="flex  gap-3 items-center justify-center p-0">
            <NavLink to="/login" className="btn btn-outline">
              Login
            </NavLink>
            
            <NavLink to="/register" className="btn  btn-outline">
              Register
            </NavLink>
          </div>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar shadow-xl px-7 bg-base-100 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-300 shadow-xl text-base-300 rounded-box z-[1] m-3 w-52 p-3 space-y-3"
          >
            {common}
          </ul>
        </div>
        <div>
          <p className="text-2xl md:text-4xl  font-medium ">
            W3<small className="text-lg text-[#F5004F]">Movies</small>
          </p>
          <p className="font-semibold">World Wide Web</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{common}</ul>
      </div>
      <div className="navbar-end ">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="text-3xl mr-6"
        >
          {" "}
          {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
        </button>

        <div className="dropdown dropdown-end ">
          <div
            tabIndex={0}
            role="button"
            className=" p-1 rounded-full border border-dashed border-white "
          >
            <div className="w-12 rounded-full  ">
              {user && user?.email ? (
                <div className="flex items-center justify-center">
                  <img
                    className="rounded-full object-cover w-12 h-12 "
                    src={user?.photoURL}
                    alt="user"
                  />
                </div>
              ) : (
                <span className=" w-12 h-12 flex items-center justify-center"><FaUserAlt/></span>
              )}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white text-black font-semibold shadow-xl  rounded-box z-[1] m-3 w-48 p-3 space-y-3 text-center items-center justify-center"
            >
              <li>
                <p className="underline">USER INFORMATION</p>
              </li>
              <li>
                <p>
                  {user && user?.email ? (
                    <span className="text-xl">{user?.displayName}</span>
                  ) : (
                    "Please login"
                  )}
                </p>
              </li>
              <li>
                {user && user?.email ? (
                  <p className="text-wrap text-center flex flex-col">
                    <span className="text-lg">Last sign In:</span>{" "}
                    {user?.metadata?.lastSignInTime}
                  </p>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
