import ListCategoryFrag from "../Fragments/ListCategoryFrag";

const ListCategory = ({ data, handleCategory }) => {
  return (
    <section className="flex flex-col gap-3 bg-white px-10 py-5">
      {data.map((x, index) => {
        return (
          <ListCategoryFrag
            x={x}
            index={index}
            handleCategory={handleCategory}
          />
        );
      })}
    </section>
  );
};

export default ListCategory;
