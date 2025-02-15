import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { UserLogin, setUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    UserLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        alert(error.code);
      });
  };


  return (
    <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-lg border">
                <h2 className='text-center font-bold pt-3 text-2xl'>Login your account</h2>
                <hr className='w-10/12 mx-auto h-[2px] opacity-40 mt-5 bg-base-300' />

                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Email</span>
                        </label>
                        <input
                            name='email'
                            type="email"
                            placeholder="Enter your email address"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Password</span>
                        </label>

                        <input
                            name='password'
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered"
                            required />


                        <Link to='/register' className='font-semibold text-red-600 link-hover'> Forgotten account ?</Link>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                </form>


            </div>
        </div>
  );
};

export default Login;
