import Number from "./Number";
import Lists from "./Lists";
import BtnDelete from "./BtnDelete";
import BtnEdit from "./BtnEdit";

const ListCategorys = ({
  index,
  x,
  handleCategory,
  handleTitleList,
  handleBtnEdit,
}) => {
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
      <section className="flex gap-2">
        <BtnEdit
          handleBtnEdit={handleBtnEdit}
          x={x}
          handleTitleList={handleTitleList}
          size={20}
        />
        <BtnDelete size={20} />
      </section>
    </>
  );
};

export default ListCategorys;
