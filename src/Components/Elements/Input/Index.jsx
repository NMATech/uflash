import Input from "./Input";
import Title from "./Title";

const InputField = ({ type, title }) => {
  return (
    <section>
      <Title>{title}</Title>
      <Input type={type} />
    </section>
  );
};

export default InputField;