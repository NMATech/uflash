import { useNavigate } from "react-router-dom";
import logo from "../assets/logo/Logo (1).png";

const Welcome = () => {
  const navigate = useNavigate();

  const handleDirectHome = () => {
    navigate("/home");
  };

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center gap-5 text-center">
      <img src={logo} alt="" />
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="font-bold text-3xl">Welcome to UFlash</h1>
        <p className="text-xl w-[80%] mx-auto">
          Make your days beatiful using a simple flash card app
        </p>
        <button
          onClick={handleDirectHome}
          className="w-max bg-light-accent hover:bg-light-accent/80 px-12 py-2 text-black rounded-xl font-bold"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Welcome;
