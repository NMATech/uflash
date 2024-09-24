import FormFlashcard from "../Fragments/FormFlashcard";

const ModalFormFlashcard = ({ handleFlashcard }) => {
  return (
    <section className="fixed inset-0 w-full flex justify-center items-center bg-black bg-opacity-20">
      <FormFlashcard handleFlashcard={handleFlashcard} />
    </section>
  );
};

export default ModalFormFlashcard;
