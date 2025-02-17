import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error messages

    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format");
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must be at least 6 characters, include one uppercase letter, one lowercase letter, and one number."
      );
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({
          displayName: name,
          photoURL: photo,
        })
          .then(() => navigate("/"))
          // .catch((err) => console.log(err));
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
         alert("This email is already registered. Please use a different email or log in.")
        } else {
          setErrorMessage(error.message);
        }
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center mt-10">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-lg border">
        <h2 className="text-center font-bold pt-3 text-2xl">Register</h2>
        <hr className="w-10/12 mx-auto h-[2px] opacity-40 mt-5 bg-base-300" />

        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Your Name</span>
            </label>
            <input name="name" type="text" placeholder="Enter your name" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Photo URL</span>
            </label>
            <input name="photo" type="text" placeholder="Enter your Photo URL" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input name="email" type="email" placeholder="Enter your email" className="input input-bordered" required />
          </div>

          {/* Password Input with Show/Hide Feature */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="input input-bordered pr-10"
              required
            />
            <span
              className="absolute right-3 top-12 cursor-pointer text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Show Validation Errors */}
          {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}

          <div className="form-control">
            <label className="label flex items-center gap-3 font-semibold">
              <input type="checkbox" defaultChecked className="checkbox checkbox-sm" required />
              Accept Terms & Conditions
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-neutral">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
