import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Movie } from "./components/Movie";
import { Movies } from "./components/Movies";
import { About } from "./components/About";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        index: true,
      },
      {
        path: '/movies',
        element: <Movies></Movies>,
      },
      {
        path: '/movie/:id',
        element: <Movie></Movie>
      },
      {
        path: '/about',
        element: <About></About>,
      },
    ]
  }
])