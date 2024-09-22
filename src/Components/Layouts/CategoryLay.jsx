import { HeadlineCategory } from "../Fragments/HeadlineCategory";
import ListCategoryFrag from "../Fragments/ListCategoryFrag";

export const CategoryLay = ({ data, handleBtnCategory }) => {
  return (
    <>
      <HeadlineCategory handleBtnCategory={handleBtnCategory} />
      <section className="w-full bg-white p-3">
        {data.map((x, index) => {
          return <ListCategoryFrag x={x} index={index} />;
        })}
      </section>
    </>
  );
};
