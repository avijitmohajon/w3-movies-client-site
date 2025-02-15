import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-52 text-center">
            <h4 className="text-4xl font-bold text-red-600">404 - Page Not Found!!!</h4>
            <p className=" font-semibold w-6/12 mt-5 text-lg">
                <span className="text-2xl">Oops!</span>
                <br />
                The page you are looking for doesn't exist.
                You may have mistyped the address or the page may have been moved...
            </p>
            <Link navigate="/" className="btn bg-lime-400 text-black text-lg hover:bg-lime-600">Go to Home</Link>
        </div>

    );
};

export default Error;