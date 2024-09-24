import { RxCross2 } from "react-icons/rx";
import Table from "../Fragments/Table";

const ModalListCard = ({ handleCategory, titleCategory, isCategory }) => {
  return (
    <section className="fixed inset-0 w-full flex justify-center items-center bg-black bg-opacity-20">
      <section className="absolute max-w-[500px] bg-white p-5">
        <section className="w-full absolute flex justify-end top-[-1em] left-3">
          <button onClick={() => handleCategory(isCategory)}>
            <div className="bg-red-500 p-2 rounded-full">
              <RxCross2 className="text-[20px] text-white" />
            </div>
          </button>
        </section>
        <section>
          <h1 className="text-2xl text-center font-semibold">
            List Flashcard {titleCategory}
          </h1>
        </section>
        <section className="mt-3">
          <Table titleCategory={titleCategory} />
        </section>
      </section>
    </section>
  );
};

export default ModalListCard;
