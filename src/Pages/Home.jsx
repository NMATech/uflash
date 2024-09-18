import Menu from "../Components/Layouts/Menu";
import Navbar from "../Components/Layouts/Navbar";
import { SliderFlash } from "../Components/Layouts/SliderFlash";

const Home = () => {
  return (
    <section className="h-screen bg-[#ddd]">
      <Navbar />
      <section className="p-3">
        <Menu />
      </section>
      <section className="w-full h-[50%] mt-5 p-3">
        <SliderFlash />
      </section>
    </section>
  );
};

export default Home;
