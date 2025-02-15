import React, { useEffect } from "react";

import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Nabbar";
import Header from "../components/Header";

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    // Dynamically set the title based on the current route
    const path = location.pathname;

    if (path === "/") {
      document.title = "Home || W3 Movies";
    } else if (path === "/allmovies") {
      document.title = "All Movies || W3 Movies";
    } else if (path === "/login") {
      document.title = "Login || W3 Movies";
    } else if (path === "/register") {
      document.title = "Register || W3 Movies";
    } else if (path === "/favorite") {
      document.title = "Favorite Movie || W3 Movies";
    } else if (path === "/addmovie") {
      document.title = "Add Movie || W3 Movies";
    } else {
      document.title = "W3 Movies"; // Default title
    }
  }, [location]);

  return (
    <div className=" container mx-auto">
      <header className="w-full mx-auto">
        <nav >
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="container mx-auto  bg-base p-1">
        <Outlet />
      </main>

      <footer className="mx-auto  mt-5 shadow-lg bg-[#38383855] ">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
