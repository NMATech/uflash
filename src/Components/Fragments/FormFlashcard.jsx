import { Btn2 } from "../Elements/Button/Btn2";
import InputField from "../Elements/Input/Index";
import { RxCross2 } from "react-icons/rx";
import SelectInput from "../Elements/Input/SelectInput";

const FormFlashcard = ({ handleFlashcard }) => {
  return (
    <div className="relative bg-white w-[250px] flex flex-col items-center gap-3 max-h-max px-4 py-2">
      <section className="w-full absolute flex justify-end top-[-1em] left-3">
        <button onClick={handleFlashcard}>
          <div className="bg-red-500 p-2 rounded-full">
            <RxCross2 className="text-[20px] text-white" />
          </div>
        </button>
      </section>
      <section>
        <h1 className="text-center font-semibold text-xl">
          Form Add Flashcard
        </h1>
      </section>
      <section className="w-full p-2">
        <SelectInput />
      </section>
      <InputField type={"text"} title={"Question"} />
      <InputField type={"text"} title={"Answer"} />
      <Btn2>Add</Btn2>
    </div>
  );
};

export default FormFlashcard;
