import React from "react";
import Header from "../components/Header";
import { useLoaderData } from "react-router-dom";
import FeaturedMovies from "./FeaturedMovies";
import Sponsor from "./sponsor";
import Newsletter from "./Newsletter";
import Testimonials from "./Testimonials";

const HomePage = () => {
  const movies = useLoaderData();
  return (
    <div>
      <Header></Header>

      <FeaturedMovies movies={movies}></FeaturedMovies>
<Testimonials/>
      <Newsletter />
      <Sponsor></Sponsor>
    </div>
  );
};

export default HomePage;
