import { useState } from "react";
import { CategoryLay } from "../Components/Layouts/CategoryLay";
import ModalFormCategory from "../Components/Layouts/ModalFormCategory";

const Category = () => {
  const data = ["food", "cloth", "gadget"];
  const [isBtnCategoryClicked, setIsBtnCategoryClicked] = useState(false);

  const handleBtnCategory = () => {
    setIsBtnCategoryClicked((prevValue) => !prevValue);
  };

  return (
    <>
      <section className="w-[50%] mx-auto p-3">
        <CategoryLay handleBtnCategory={handleBtnCategory} data={data} />
      </section>
      {isBtnCategoryClicked && (
        <ModalFormCategory handleBtnCategory={handleBtnCategory} />
      )}
    </>
  );
};

export default Category;
