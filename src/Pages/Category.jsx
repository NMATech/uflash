import { useContext, useEffect, useState } from "react";
import { CategoryLay } from "../Components/Layouts/CategoryLay";
import ModalFormCategory from "../Components/Layouts/ModalFormCategory";
import ModalListCard from "../Components/Layouts/ModalListCard";
import ModalFormFlashcard from "../Components/Layouts/ModalFormFlashcard";
import { GlobalContext } from "../Hooks/AppCategory/GlobalState";

const Category = () => {
  const { category } = useContext(GlobalContext);
  const [isBtnCategoryClicked, setIsBtnCategoryClicked] = useState(false);
  const [isBtnEditClicked, setIsBtnEditClicked] = useState(false);
  const [isCategory, setIsCategoryClicked] = useState(null);
  const [isFlashcard, setIsFlashcard] = useState(false);
  const [titleFlashcard, setTitleFlashcard] = useState("");

  const handleBtnCategory = () => {
    setIsBtnCategoryClicked((prevValue) => !prevValue);
  };

  const handleBtnEdit = () => {
    setIsBtnEditClicked((prevValue) => !prevValue);
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

  useEffect(() => {
    console.log("Category ditambahkan", category);
  }, [category]);

  return (
    <>
      <section className="w-[50%] mx-auto p-3">
        <CategoryLay
          handleBtnCategory={handleBtnCategory}
          handleBtnEdit={handleBtnEdit}
          handleCategory={handleCategory}
          handleFlashcard={handleFlashcard}
          handleTitleList={handleTitleList}
          data={category}
        />
      </section>

      {/* Tambahkan ini untuk melihat kategori */}
      {isCategory && (
        <ModalListCard
          handleCategory={handleCategory}
          titleCategory={titleFlashcard}
          isCategory={isCategory}
        />
      )}
      {isBtnCategoryClicked && (
        <ModalFormCategory title={"Add"} handle={handleBtnCategory} />
      )}
      {isBtnEditClicked && (
        <ModalFormCategory
          title={"Edit"}
          nilai={titleFlashcard}
          handle={handleBtnEdit}
        />
      )}
      {isFlashcard && <ModalFormFlashcard handleFlashcard={handleFlashcard} />}
    </>
  );
};

export default Category;
