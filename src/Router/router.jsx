import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllMovies from "../Pages/AllMovies";
import FavoriteMovies from "../Pages/FavoriteMovies";
import AddMovie from "../Pages/AddMovie";
import NewRelease from "../Pages/NewRelease";
import DetailsPage from "../Pages/DetailsPage";
// import Header from "../components/Header";
import HomePage from "../Pages/HomePage";
import UpdatePage from "../Pages/UpdatePage";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () =>fetch("https://w3-movies-server-site.vercel.app/movie"),
      },
      {
        path: "/allmovies",
        element: <AllMovies></AllMovies>,
        loader: () => fetch("https://w3-movies-server-site.vercel.app/movie"),
      },
      {
        path: "/detailspage/:id",
        element: (
          <PrivateRoute>
            <DetailsPage></DetailsPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/addmovie",
        element: (
          <PrivateRoute>
            <AddMovie></AddMovie>
          </PrivateRoute>
        ),
      },
      {
        path: "/updatemovie/:id",
        element: (
          <PrivateRoute>
            <UpdatePage></UpdatePage>
          </PrivateRoute>
        ),

        loader: ({ params }) =>
          fetch(`https://w3-movies-server-site.vercel.app/movie/${params.id}`),
      },
      {
        path: "/release",
        element: <NewRelease></NewRelease>,
      },
      {
        path: "/favorite",
        element: <FavoriteMovies></FavoriteMovies>,
      },
     
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
