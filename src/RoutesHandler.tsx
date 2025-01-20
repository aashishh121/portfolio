import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Work from "./Components/Work";
import About from "./Components/About";

function RoutesHandler() {
  const router = createHashRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // {
        //   path: "/projects",
        //   element: <Projects />,
        // },
        // {
        //   path: "/works",
        //   element: <Work />,
        // },
        // {
        //   path: "/about",
        //   element: <About />,
        // },
        {
          path: "",
          element: <Navigate to="/home" />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default RoutesHandler;
