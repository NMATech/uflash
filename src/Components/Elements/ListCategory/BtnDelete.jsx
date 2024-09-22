import { FaRegTrashCan } from "react-icons/fa6";

const BtnDelete = () => {
  return (
    <button className="bg-red-500 hover:bg-red-500/80 ease-in px-4 py-2 rounded-xl">
      <FaRegTrashCan className="text-[20px] text-white" />
    </button>
  );
};

export default BtnDelete;
