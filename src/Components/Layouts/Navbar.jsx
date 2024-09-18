import { Img } from "../Elements/Navbar/Img";
import { Uflash } from "../Elements/Navbar/Uflash";

const Navbar = () => {
  return (
    <header className="bg-dark-primary text-dark-bg w-full flex justify-center items-center gap-3 p-3">
      <Img />
      <Uflash />
    </header>
  );
};

export default Navbar;
