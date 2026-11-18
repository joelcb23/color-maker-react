import TubeContainer from "./TubeContainer";
import { useColors } from "../../hooks/useColors";
import { useEffect } from "react";
import Label from "./Label";

const MixContainer = () => {
  const { colors } = useColors();
  // console.log("MixContainer colors:", colors);
  const mixHexColors = (colors) => {
    if (!Array.isArray(colors) || colors.length < 2 || colors.length > 5) {
      throw new Error("Must provide an array of 2 to 5 HEX color strings.");
    }

    let rSum = 0;
    let gSum = 0;
    let bSum = 0;

    colors.forEach((hex) => {
      let cleanHex = hex.replace("#", "").trim();

      if (cleanHex.length === 3) {
        cleanHex = cleanHex
          .split("")
          .map((c) => c + c)
          .join("");
      }

      if (cleanHex.length !== 6) {
        throw new Error(`The HEX value "${hex}" is not valid.`);
      }

      rSum += parseInt(cleanHex.substring(0, 2), 16);
      gSum += parseInt(cleanHex.substring(2, 4), 16);
      bSum += parseInt(cleanHex.substring(4, 6), 16);
    });

    const count = colors.length;
    const rAvg = Math.round(rSum / count);
    const gAvg = Math.round(gSum / count);
    const bAvg = Math.round(bSum / count);

    const toHex = (n) => n.toString(16).padStart(2, "0");

    return `#${toHex(rAvg)}${toHex(gAvg)}${toHex(bAvg)}`;
  };

  const handleMixColors = (colors) => {
    if (colors?.length === 0 || !colors) return "#FFFFFF"; // If no colors are provided, return white as default
    try {
      const mixedColor = mixHexColors(colors);
      console.log("Mixed color:", mixedColor);
      return mixedColor;
    } catch (error) {
      console.error(error.message);
      return "#FFFFFF"; // If an error occurs, return white as default
    }
  };

  useEffect(() => {}, [colors]);
  return (
    <div
      className={`flex flex-col items-center w-full gap-4 bg-gray-200 border border-gray-600 rounded p-10 md:w-auto`}
    >
      <Label label={handleMixColors(colors)} />
      <div
        className="size-mix-container border rounded"
        style={{ backgroundColor: handleMixColors(colors) }}
      />
      <TubeContainer colors={colors} />
    </div>
  );
};

export default MixContainer;
