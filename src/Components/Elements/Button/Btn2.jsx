export const Btn2 = ({ children, handle }) => {
  return (
    <button
      onClick={handle}
      className="w-[50%] flex justify-center items-center gap-2 bg-dark-accent px-6 py-1 rounded-xl"
    >
      {children}
    </button>
  );
};
