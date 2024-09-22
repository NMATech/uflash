import { Img } from "../Elements/Navbar/Img";
import { Uflash } from "../Elements/Navbar/Uflash";

const Navbar = () => {
  return (
    <header className="bg-dark-primary">
      <section className="text-dark-bg w-full flex justify-center items-center gap-3 p-3">
        <Img />
        <Uflash />
      </section>
      <div className="w-full flex justify-center items-center">
        <ul className="flex gap-5">
          <li>
            <a
              href="/home"
              className="text-black font-semibold hover:text-light-accent"
            >
              Home
            </a>
          </li>{" "}
          |
          <li>
            <a
              href="/home/category"
              className="text-black font-semibold hover:text-light-accent"
            >
              Category
            </a>
          </li>{" "}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
