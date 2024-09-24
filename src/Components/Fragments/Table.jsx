import Td from "../Elements/Table/Td";
import Th from "../Elements/Table/Th";
import BtnDelete from "../Elements/ListCategory/BtnDelete";
import useFlashcard from "../../Hooks/useFlashcard/useFlashcard";

const Table = ({ titleCategory }) => {
  const thead = ["No", "Question", "Answer", "Action"];
  const { flashcard } = useFlashcard();
  const filteredData = flashcard.filter((x) => {
    return x.category === titleCategory;
  });

  return (
    <table class="w-full table-auto border-separate">
      <thead>
        <tr>
          {thead.map((title, index) => {
            return <Th index={index} title={title} />;
          })}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((title, index) => {
          return (
            <tr index={index} className="">
              <Td title={index + 1} />
              <Td title={title.question} />
              <Td title={title.answer} />
              <td className="flex justify-center">
                <BtnDelete size={10} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
