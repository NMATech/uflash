import FormCategory from "../Fragments/FormCategory";

const ModalFormCategory = ({ handleBtnCategory }) => {
  return (
    <section className="fixed inset-0 w-full flex justify-center items-center bg-black bg-opacity-20">
      <FormCategory handleBtnCategory={handleBtnCategory} />
    </section>
  );
};

export default ModalFormCategory;
