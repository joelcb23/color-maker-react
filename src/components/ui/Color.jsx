const Color = ({ children, color, onClick }) => {
  return (
    <span
      style={{ backgroundColor: color }}
      className={`w-10 h-10 rounded overflow-hidden cursor-pointer`}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </span>
  );
};

export default Color;
