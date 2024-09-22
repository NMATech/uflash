import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Welcome from "../Pages/Welcome";
import Layouts from "../Layouts/Layouts";
import Category from "../Pages/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/home",
    element: <Layouts />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/home/category",
        element: <Category />,
      },
    ],
  },
]);

export default router;
