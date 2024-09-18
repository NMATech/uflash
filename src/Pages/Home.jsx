import Menu from "../Components/Layouts/Menu";
import Navbar from "../Components/Layouts/Navbar";

const Home = () => {
  return (
    <section className="h-screen bg-[#ddd]">
      <Navbar />
      <section className="p-3">
        <Menu />
      </section>
    </section>
  );
};

export default Home;
