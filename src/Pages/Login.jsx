import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { UserLogin, setUser, loginWithGoogle } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    const user = await loginWithGoogle();
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    UserLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state?.from || "/");
      })
      .catch((error) => {
        setError(error.message || "Login failed. Please check your credentials.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 py-6">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-lg border">
        <h2 className="text-center font-bold pt-6 text-2xl">
          Login to your account
        </h2>
        <hr className="w-10/12 mx-auto h-[2px] opacity-40 mt-5 bg-base-300" />

        {error && (
          <div className="mx-6 mt-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
              disabled={isLoading}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
              disabled={isLoading}
            />
            <div className="flex justify-between items-center mt-2">
              <Link
                to="/forgot-password"
                className="text-sm font-semibold text-red-600 hover:underline"
              >
                Forgot password?
              </Link>
              <Link
                to="/register"
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                Create new account
              </Link>
            </div>
          </div>
          <div className="form-control mt-6">
            <button 
              className="btn btn-neutral" 
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        <div className="flex flex-col items-center pb-6">
          <div className="relative w-10/12 mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-base-100 text-sm text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="btn btn-wide gap-2 mb-4 bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
          >
            <FaGoogle className="text-blue-500 text-lg" />
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;