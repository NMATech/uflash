const Input = ({ type, value, handle }) => {
  return (
    <input
      value={value}
      onChange={handle}
      type={type}
      className="border border-slate-400 p-1"
    />
  );
};

export default Input;
