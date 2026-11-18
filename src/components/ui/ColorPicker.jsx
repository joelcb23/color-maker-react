import { useState, useEffect, useRef } from "react";
import { HexColorPicker } from "react-colorful";

const ColorPicker = ({ addColor }) => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("#3b82f6");
  const wrapperRef = useRef(null);

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSave = () => {
    addColor(color);
    setOpen(false);
  };

  return (
    <div
      ref={wrapperRef}
      className={`relative w-10 h-10 rounded cursor-pointer`}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full h-full rounded transition-all duration-300 ease-in `}
        style={{ backgroundColor: color }}
      />

      {open && (
        <div className="absolute z-10 p-2 bg-white rounded shadow-lg top-[110%] left-0 flex flex-col items-center gap-2">
          <HexColorPicker color={color} onChange={setColor} />
          <button
            type="button"
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-300 ease-in"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
