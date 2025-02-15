import React from "react";
import Header from "../components/Header";

import { Outlet, useLoaderData } from "react-router-dom";
import FeaturedMovies from "./FeaturedMovies";

const HomePage = () => {
  const movies = useLoaderData();
  return (
    <div >
      <Header></Header>
      <FeaturedMovies movies={movies}></FeaturedMovies>
    </div>
  );
};

export default HomePage;
