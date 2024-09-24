import { Btn2 } from "../Button/Btn2";
import { PiCardsFill } from "react-icons/pi";
import { GiCardKingDiamonds } from "react-icons/gi";

export const BtnAddCategory = ({ handleBtnCategory, handleFlashcard }) => {
  return (
    <section className="flex justify-center items-center mt-2 gap-3">
      <Btn2 handle={handleBtnCategory}>
        <PiCardsFill className="text-[20px]" />
        <h1>Add Category</h1>
      </Btn2>
      <Btn2 handle={handleFlashcard}>
        <GiCardKingDiamonds className="text-[20px]" />
        <h1>Add Flashcard</h1>
      </Btn2>
    </section>
  );
};
