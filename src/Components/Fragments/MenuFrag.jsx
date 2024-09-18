import { Btn } from "../Elements/Button/Btn";
import { Btn2 } from "../Elements/Button/Btn2";
import { CategorySelect } from "../Elements/Category/CategorySelect";
import { PiCardsFill } from "react-icons/pi";
import { GiCardAceHearts } from "react-icons/gi";

export const MenuFrag = () => {
  const menus = [
    {
      logo: <PiCardsFill className="text-[20px]" />,
      title: "Add Category",
    },
    {
      logo: <GiCardAceHearts className="text-[20px]" />,
      title: "Add Flashcard",
    },
  ];

  return (
    <>
      <CategorySelect />
      <section className="w-[30%] flex justify-center items-center gap-3">
        {menus.map((menu, index) => {
          return (
            <Btn2 key={index}>
              {menu.logo}
              <p>{menu.title}</p>
            </Btn2>
          );
        })}
      </section>
      <Btn width={30}>Select</Btn>
    </>
  );
};
