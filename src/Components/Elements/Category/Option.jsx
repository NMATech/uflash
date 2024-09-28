import { useContext } from "react";
import { GlobalContext } from "../../../Hooks/AppCategory/GlobalState";

export const Option = () => {
  const { category } = useContext(GlobalContext);
  return (
    <>
      <option value="" disabled selected className="w-full rounded-xl">
        Select category
      </option>
      {category.map((x, index) => {
        return (
          <option key={index} value={x} className="w-full rounded-xl">
            {x}
          </option>
        );
      })}
    </>
  );
};
