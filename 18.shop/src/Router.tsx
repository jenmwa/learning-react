import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Product } from "./components/Product";
import { Products } from "./components/Products";


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
        path: '/products',
        element: <Products></Products>,
      },
      {
        path: '/products/:id',
        element: <Product></Product>,
      },
      {
        path: '/about',
        element: <About></About>,
      }
    ]
  }
])