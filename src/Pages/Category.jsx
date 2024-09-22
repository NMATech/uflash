import { FaRegTrashCan } from "react-icons/fa6";
import { CategoryLay } from "../Components/Layouts/CategoryLay";

const Category = () => {
  const data = ["food", "cloth", "gadget"];

  return (
    <section className="w-[50%] mx-auto p-3">
      <CategoryLay data={data} />
    </section>
  );
};

export default Category;
