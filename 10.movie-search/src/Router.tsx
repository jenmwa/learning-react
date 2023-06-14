import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Components/Home";
import { Movies } from "./Components/Movies";
import { Movie } from "./Components/Movie";
import { Layout } from "./Components/Layout";
import { About } from "./Components/About";
import { moviesLoader } from "./loaders/moviesLoader";
import { ErrorPage } from "./Components/ErrorPage";
import { movieLoader } from "./loaders/movieLoader";


export const Router = createBrowserRouter ([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>, 
        index: true,
      },
      {
        path: '/movies',
        element: <Movies></Movies>, 
        loader: moviesLoader,
      },
      {
        path: '/movie/:movieId',
        element: <Movie></Movie>, 
        loader: movieLoader,
      },
      {
        path: '/about',
        element: <About></About>, 
      },
    ]
  },
 
])