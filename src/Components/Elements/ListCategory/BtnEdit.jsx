import { FaPen } from "react-icons/fa";

const BtnEdit = ({ size, x, handleTitleList, handleBtnEdit }) => {
  return (
    <button
      onClick={() => {
        handleTitleList(x);
        handleBtnEdit();
      }}
      className="bg-green-500 hover:bg-green-500/80 ease-in px-4 py-2 rounded-xl"
    >
      <FaPen className={`text-[${size}px] text-white`} />
    </button>
  );
};

export default BtnEdit;
