import { useContext } from "react";
import { GlobalContext } from "../../../Hooks/AppCategory/GlobalState";

const SelectInput = () => {
  const { category } = useContext(GlobalContext);

  return (
    <select name="" id="" className="w-full border border-slate-400 p-1">
      <option value="" selected disabled>
        Select a category
      </option>
      {category.map((x, index) => {
        return (
          <option key={index} value={x}>
            {x}
          </option>
        );
      })}
    </select>
  );
};

export default SelectInput;
