import { useColors } from "../../hooks/useColors";
import ColorTube from "./ColorTube";

const TubeContainer = () => {
  const { colors, clearColors } = useColors();
  return (
    <>
      <div className="flex justify-center items-center w-full gap-4">
        {colors.map((color, index) => (
          <ColorTube key={index} color={color} />
        ))}
      </div>
      <button
        className="bg-red-500 text-white hover:bg-red-600 transition-all duration-300 ease-in p-2 rounded cursor-pointer"
        onClick={() => clearColors()}
      >
        Clear colors
      </button>
    </>
  );
};

export default TubeContainer;
