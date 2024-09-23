import { useState } from "react";
import { CategoryLay } from "../Components/Layouts/CategoryLay";
import ModalFormCategory from "../Components/Layouts/ModalFormCategory";
import ModalListCard from "../Components/Layouts/ModalListCard";

const Category = () => {
  const data = ["food", "cloth", "gadget"];
  const [isBtnCategoryClicked, setIsBtnCategoryClicked] = useState(false);
  const [isCategory, setIsCategoryClicked] = useState(false);

  const handleBtnCategory = () => {
    setIsBtnCategoryClicked((prevValue) => !prevValue);
  };

  const handleCategory = () => {
    setIsCategoryClicked((prevValue) => !prevValue);
  };

  return (
    <>
      <section className="w-[50%] mx-auto p-3">
        <CategoryLay
          handleBtnCategory={handleBtnCategory}
          handleCategory={handleCategory}
          data={data}
        />
      </section>
      {isCategory && <ModalListCard handleCategory={handleCategory} />}
      {isBtnCategoryClicked && (
        <ModalFormCategory handleBtnCategory={handleBtnCategory} />
      )}
    </>
  );
};

export default Category;
