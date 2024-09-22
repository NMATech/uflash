export const Btn = ({ width, children }) => {
  return (
    <button
      className={`w-[${width}%] mx-auto bg-dark-accent px-6 py-1 rounded-xl`}
    >
      {children}
    </button>
  );
};
