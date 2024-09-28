import { useContext, useState } from "react";
import { Btn2 } from "../Elements/Button/Btn2";
import InputField from "../Elements/Input/Index";
import { RxCross2 } from "react-icons/rx";
import { ACTIONS } from "../../Hooks/action/ACTIONS";
import { GlobalContext } from "../../Hooks/AppCategory/GlobalState";

const FormCategory = ({ title, nilai = "", handleBtnCategory }) => {
  const [value, setValue] = useState(nilai);
  const { addCategory } = useContext(GlobalContext);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleAddCategory = () => {
    if (value.trim() !== "") {
      addCategory(value);
      setValue(""); // Reset input value after adding
    } else {
      alert("Category cannot be empty!"); // Alert user if input is empty
    }
  };

  return (
    <div className="relative bg-white w-[250px] flex flex-col items-center gap-3 max-h-max px-4 py-2">
      <section className="w-full absolute flex justify-end top-[-1em] left-3">
        <button onClick={handleBtnCategory}>
          <div className="bg-red-500 p-2 rounded-full">
            <RxCross2 className="text-[20px] text-white" />
          </div>
        </button>
      </section>
      <section>
        <h1 className="text-center font-semibold text-xl">
          Form {title} Category
        </h1>
      </section>
      <InputField
        value={value}
        handle={handleInput}
        type={"text"}
        title={"Name Category"}
      />
      <Btn2 handle={handleAddCategory}>{title}</Btn2>
    </div>
  );
};

export default FormCategory;
