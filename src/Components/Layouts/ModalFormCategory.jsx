import FormCategory from "../Fragments/FormCategory";

const ModalFormCategory = ({ title, nilai, handle }) => {
  return (
    <section className="fixed inset-0 w-full flex justify-center items-center bg-black bg-opacity-20">
      <FormCategory title={title} nilai={nilai} handleBtnCategory={handle} />
    </section>
  );
};

export default ModalFormCategory;
