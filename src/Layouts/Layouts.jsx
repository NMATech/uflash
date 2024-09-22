import { Outlet } from "react-router-dom";
import Navbar from "../Components/Layouts/Navbar";

const Layouts = () => {
  return (
    <section className="h-screen bg-[#ddd]">
      <Navbar />
      <Outlet />
    </section>
  );
};

export default Layouts;
