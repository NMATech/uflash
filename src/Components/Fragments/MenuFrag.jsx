import { Btn } from "../Elements/Button/Btn";
import { CategorySelect } from "../Elements/Category/CategorySelect";

export const MenuFrag = () => {
  return (
    <>
      <CategorySelect />
      <Btn width={30}>Select</Btn>
    </>
  );
};
