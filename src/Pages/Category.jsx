import { useState } from "react";
import { CategoryLay } from "../Components/Layouts/CategoryLay";
import ModalFormCategory from "../Components/Layouts/ModalFormCategory";
import ModalListCard from "../Components/Layouts/ModalListCard";
import ModalFormFlashcard from "../Components/Layouts/ModalFormFlashcard";

const Category = () => {
  const data = ["food", "cloth", "gadget"];
  const [isBtnCategoryClicked, setIsBtnCategoryClicked] = useState(false);
  const [isCategory, setIsCategoryClicked] = useState(false);
  const [isFlashcard, setIsFlashcard] = useState(false);

  const handleBtnCategory = () => {
    setIsBtnCategoryClicked((prevValue) => !prevValue);
  };

  const handleCategory = () => {
    setIsCategoryClicked((prevValue) => !prevValue);
  };

  const handleFlashcard = () => {
    setIsFlashcard((prevValue) => !prevValue);
  };

  return (
    <>
      <section className="w-[50%] mx-auto p-3">
        <CategoryLay
          handleBtnCategory={handleBtnCategory}
          handleCategory={handleCategory}
          handleFlashcard={handleFlashcard}
          data={data}
        />
      </section>
      {isCategory && <ModalListCard handleCategory={handleCategory} />}
      {isBtnCategoryClicked && (
        <ModalFormCategory handleBtnCategory={handleBtnCategory} />
      )}
      {isFlashcard && <ModalFormFlashcard handleFlashcard={handleFlashcard} />}
    </>
  );
};

export default Category;
