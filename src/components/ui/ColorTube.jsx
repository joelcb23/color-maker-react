import Label from "./Label";

const ColorTube = ({ color }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <span
        style={{ backgroundColor: color }}
        className={`w-6 h-32 tube-border`}
      />
      <Label label={color} />
    </div>
  );
};

export default ColorTube;
