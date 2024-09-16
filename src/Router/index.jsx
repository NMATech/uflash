import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Welcome from "../Pages/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default router;
