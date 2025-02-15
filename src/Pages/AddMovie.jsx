import React, { useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddMovie = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    poster: "",
    title: "",
    genre: "",
    duration: "",
    releaseYear: "",
    rating: "",
    summary: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenreChange = (e) => {
    setFormData({
      ...formData,
      genre: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { poster, title, genre, duration, releaseYear, rating, summary } =
      formData;

    // Validation checks
    if (!poster || !/^https?:\/\/[^\s]+$/.test(poster)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid image URL.",
      });
      return;
    }

    if (!title || title.length < 2) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Movie title must have at least 2 characters.",
      });
      return;
    }

    if (!genre) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a genre.",
      });
      return;
    }

    if (!duration || duration < 60) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Duration must be at least 60 minutes.",
      });
      return;
    }

    if (!releaseYear) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a release year.",
      });
      return;
    }

    if (!rating || rating < 1 || rating > 10) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please provide a rating between 1-10.",
      });
      return;
    }

    if (!summary || summary.trim().length < 10) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Summary must be at least 10 characters long.",
      });
      return;
    }

    Swal.fire({
      title: "Movie Added Successfully",
      icon: "success",
      draggable: true,
      
    });

   

    // console.log("Movie added:", formData);

    // data send to backend

    fetch("http://localhost:5000/updatemovies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
      navigate("/");
      resetForm();
  };

  return (
    <div className="min-h-screen flex justify-center items-center mt-10">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <h2 className="text-center font-bold pt-3 text-2xl">Add a New Movie</h2>
        <hr className="w-10/12 mx-auto h-[2px] opacity-40 mt-5 bg-base-300" />
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Movie Poster URL</span>
            </label>
            <input
              name="poster"
              type="text"
              placeholder="Enter the movie poster URL"
              className="input input-bordered"
              value={formData.poster}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Movie Title</span>
            </label>
            <input
              name="title"
              type="text"
              placeholder="Enter the movie title"
              className="input input-bordered"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Genre</span>
            </label>
            <select
              name="genre"
              className="select select-bordered"
              value={formData.genre}
              onChange={handleGenreChange}
              required
            >
              <option value="">Select Genre</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Horror">Horror</option>
              <option value="Action">Action</option>
              <option value="Romance">Romance</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">
                Duration (in minutes)
              </span>
            </label>
            <input
              name="duration"
              type="number"
              placeholder="Enter the duration"
              className="input input-bordered"
              value={formData.duration}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Release Year</span>
            </label>
            <select
              name="releaseYear"
              className="select select-bordered"
              value={formData.releaseYear}
              onChange={handleChange}
              required
            >
              <option value="">Select Year</option>
              {Array.from(
                { length: 20 },
                (_, i) => new Date().getFullYear() - i
              ).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Rating</span>
            </label>
            <input
              name="rating"
              type="number"
              placeholder="Enter the rating"
              className="input input-bordered"
              value={formData.rating}
              onChange={handleChange}
              required
            />
          </div>

          {/* Summary Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Summary</span>
            </label>
            <textarea
              name="summary"
              placeholder="Enter a short summary of the movie (at least 10 characters)"
              className="textarea textarea-bordered h-24"
              value={formData.summary}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-neutral">Add Movie</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
