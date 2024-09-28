import ListCategorys from "../Elements/ListCategory/Index";

const ListCategoryFrag = ({
  index,
  x,
  handleCategory,
  handleBtnEdit,
  handleTitleList,
}) => {
  return (
    <section className="w-full flex justify-between">
      <section
        key={index}
        className="w-full flex justify-between items-center gap-3 hover:border-b-2 border-light-accent"
      >
        <ListCategorys
          index={index}
          x={x}
          handleCategory={handleCategory}
          handleBtnEdit={handleBtnEdit}
          handleTitleList={handleTitleList}
        />
      </section>
    </section>
  );
};

export default ListCategoryFrag;
