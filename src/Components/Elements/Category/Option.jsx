import useCategory from "../../../Hooks/useCategory/useCategory";

export const Option = () => {
  const { category } = useCategory();

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
