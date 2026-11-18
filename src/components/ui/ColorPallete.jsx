import { useColors } from "../../hooks/useColors";
import Color from "./Color";
import ColorPicker from "./ColorPicker";

const ColorPallete = () => {
  const colorsSet = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F1C40F",
    "#8E44AD",
    "#E74C3C",
    "#1ABC9C",
    "#2C3E50",
    "#F39C12",
    "#D35400",
    "#7F8C8D",
  ];
  const { addColor } = useColors();
  return (
    <div
      className={`w-full grid grid-cols-6 gap-4 bg-gray-200 border border-gray-600 rounded p-10 md:w-auto md:grid-cols-2`}
    >
      <ColorPicker addColor={addColor} />
      {colorsSet.map((color, index) => (
        <Color key={index} color={color} onClick={() => addColor(color)} />
      ))}
    </div>
  );
};
("");

export default ColorPallete;
