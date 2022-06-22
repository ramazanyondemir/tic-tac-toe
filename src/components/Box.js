import React, { useEffect, useState } from "react";

export const Box = ({ value, index, handleBoxClick }) => {
  const [color, setColor] = useState("x-color");

  useEffect(() => {
    if (value !== null) {
      setColor(value === "X" ? "x-color" : "o-color");
    }
  }, [value]);

  return (
    <div className={`box ${color}`} onClick={() => handleBoxClick(index)}>
      {value}
    </div>
  );
};
