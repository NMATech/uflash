import { FaRegTrashCan } from "react-icons/fa6";
import { PiCardsFill } from "react-icons/pi";
import { Btn2 } from "../Components/Elements/Button/Btn2";

const Category = () => {
  const data = ["food", "cloth", "gadget"];

  return (
    <section className="w-[50%] mx-auto p-3">
      <section className="text-center mb-5">
        <h1 className="text-2xl font-semibold">Set Card Category</h1>
        <section className="flex justify-center items-center mt-2">
          <Btn2>
            <PiCardsFill className="text-[20px]" />
            <h1>Add Category</h1>
          </Btn2>
        </section>
      </section>
      <section className="flex flex-col gap-3 bg-white px-10 py-5">
        {data.map((x, index) => {
          return (
            <section className="flex justify-between">
              <section
                key={index}
                className="w-[30%] flex items-center gap-3 hover:border-b-2 border-light-accent"
              >
                <h1 className="text-xl">{index + 1}.</h1>
                <div className="w-[50%]">
                  <button>
                    <h1 className="text-[30px]">{x}</h1>
                  </button>
                </div>
              </section>
              <button className="bg-red-500 hover:bg-red-500/80 ease-in px-4 py-2 rounded-xl">
                <FaRegTrashCan className="text-[20px] text-white" />
              </button>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default Category;
