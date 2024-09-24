import { useState } from "react";
import { CategoryLay } from "../Components/Layouts/CategoryLay";
import ModalFormCategory from "../Components/Layouts/ModalFormCategory";
import ModalListCard from "../Components/Layouts/ModalListCard";
import ModalFormFlashcard from "../Components/Layouts/ModalFormFlashcard";
import useCategory from "../Hooks/useCategory/useCategory";

const Category = () => {
  const { category, dispatch } = useCategory();
  const [isBtnCategoryClicked, setIsBtnCategoryClicked] = useState(false);
  const [isCategory, setIsCategoryClicked] = useState(null);
  const [isFlashcard, setIsFlashcard] = useState(false);
  const [titleFlashcard, setTitleFlashcard] = useState("");

  const handleBtnCategory = () => {
    setIsBtnCategoryClicked((prevValue) => !prevValue);
  };

  const handleCategory = (index) => {
    isCategory === index
      ? setIsCategoryClicked(null)
      : setIsCategoryClicked(index);
  };

  const handleFlashcard = () => {
    setIsFlashcard((prevValue) => !prevValue);
  };

  const handleTitleList = (title = null) => {
    setTitleFlashcard(title);
  };

  return (
    <>
      <section className="w-[50%] mx-auto p-3">
        <CategoryLay
          handleBtnCategory={handleBtnCategory}
          handleCategory={handleCategory}
          handleFlashcard={handleFlashcard}
          handleTitleList={handleTitleList}
          data={category}
        />
      </section>
      {isCategory && (
        <ModalListCard
          handleCategory={handleCategory}
          titleCategory={titleFlashcard}
          isCategory={isCategory}
        />
      )}
      {isBtnCategoryClicked && (
        <ModalFormCategory handleBtnCategory={handleBtnCategory} />
      )}
      {isFlashcard && <ModalFormFlashcard handleFlashcard={handleFlashcard} />}
    </>
  );
};

export default Category;
