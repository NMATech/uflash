import { useEffect } from "react";
import { HeadlineCategory } from "../Fragments/HeadlineCategory";
import ListCategoryFrag from "../Fragments/ListCategoryFrag";

export const CategoryLay = ({
  data,
  handleBtnCategory,
  handleBtnEdit,
  handleCategory,
  handleFlashcard,
  handleTitleList,
}) => {
  useEffect(() => {
    console.log("test");
  }, [data]);
  return (
    <>
      <HeadlineCategory
        handleBtnCategory={handleBtnCategory}
        handleFlashcard={handleFlashcard}
      />
      <section className="w-full bg-white p-3">
        {data.map((x, index) => {
          return (
            <ListCategoryFrag
              x={x}
              index={index}
              handleCategory={handleCategory}
              handleTitleList={handleTitleList}
              handleBtnEdit={handleBtnEdit}
            />
          );
        })}
      </section>
    </>
  );
};
