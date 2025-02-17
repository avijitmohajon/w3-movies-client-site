import React from "react";
import Header from "../components/Header";
import {  useLoaderData } from "react-router-dom";
import FeaturedMovies from "./FeaturedMovies";
import Trending from "./Trending";
import Sponsor from "./sponsor";

const HomePage = () => {
  const movies = useLoaderData();
  return (
    <div >
      <Header></Header>

      <FeaturedMovies movies={movies}></FeaturedMovies>

      <Trending movies={movies}></Trending>
      
     <Sponsor></Sponsor>
    </div>
  );
};

export default HomePage;
