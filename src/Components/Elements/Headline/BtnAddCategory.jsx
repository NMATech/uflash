import { Btn2 } from "../Button/Btn2";
import { PiCardsFill } from "react-icons/pi";

export const BtnAddCategory = () => {
  return (
    <section className="flex justify-center items-center mt-2">
      <Btn2>
        <PiCardsFill className="text-[20px]" />
        <h1>Add Category</h1>
      </Btn2>
    </section>
  );
};
