import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Colors } from "./components/Colors";
import { Color } from "./components/Color";
import { Layout } from "./components/Layout";


export const Router = createBrowserRouter([
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
        path: '/colors',
        element: <Colors></Colors>
      },
      {
        path: '/color/:id',
        element: <Color></Color>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }
])