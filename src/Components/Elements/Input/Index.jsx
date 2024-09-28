import Input from "./Input";
import Title from "./Title";

const InputField = ({ type, title, value, handle }) => {
  return (
    <section>
      <Title>{title}</Title>
      <Input value={value} handle={handle} type={type} />
    </section>
  );
};

export default InputField;
