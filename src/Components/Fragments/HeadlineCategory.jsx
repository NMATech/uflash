import { BtnAddCategory } from "../Elements/Headline/BtnAddCategory";
import Headline from "../Elements/Headline/Headline";

export const HeadlineCategory = ({ handleBtnCategory, handleFlashcard }) => {
  return (
    <section className="text-center mb-5">
      <Headline />
      <BtnAddCategory
        handleBtnCategory={handleBtnCategory}
        handleFlashcard={handleFlashcard}
      />
    </section>
  );
};
