import ListCategoryFrag from "../Fragments/ListCategoryFrag";

const ListCategory = ({ data }) => {
  return (
    <section className="flex flex-col gap-3 bg-white px-10 py-5">
      {data.map((x, index) => {
        return <ListCategoryFrag x={x} index={index} />;
      })}
    </section>
  );
};

export default ListCategory;
