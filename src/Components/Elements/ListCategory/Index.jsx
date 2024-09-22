import Number from "./Number";
import Lists from "./Lists";
import BtnDelete from "./BtnDelete";

const ListCategorys = ({ index, x }) => {
  return (
    <>
      <section className="flex items-center gap-3">
        <Number index={index} />
        <Lists x={x} />
      </section>
      <BtnDelete />
    </>
  );
};

export default ListCategorys;
