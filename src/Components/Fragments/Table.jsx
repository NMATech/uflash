import Td from "../Elements/Table/Td";
import Th from "../Elements/Table/Th";
import BtnDelete from "../Elements/ListCategory/BtnDelete";

const Table = () => {
  const thead = ["No", "Question", "Answer", "Action"];
  const data = [
    {
      Question: "Apa",
      Answer: "adalah",
    },
  ];

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
        {data.map((title, index) => {
          return (
            <tr index={index} className="">
              <Td title={index + 1} />
              <Td title={title.Question} />
              <Td title={title.Answer} />
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
