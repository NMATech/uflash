import Number from "./Number";
import Lists from "./Lists";
import BtnDelete from "./BtnDelete";

const ListCategorys = ({ index, x, handleCategory, handleTitleList }) => {
  return (
    <>
      <section className="flex items-center gap-3">
        <button
          onClick={() => {
            handleCategory(x);
            handleTitleList(x);
          }}
          className="flex items-center gap-3"
        >
          <Number index={index} />
          <Lists x={x} handleCategory={handleCategory} />
        </button>
      </section>
      <BtnDelete size={20} />
    </>
  );
};

export default ListCategorys;
