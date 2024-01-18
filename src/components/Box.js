import React, { useEffect, useState } from "react";

export const Box = ({ value, index, handleBoxClick, isWinner }) => {
  const [color, setColor] = useState("x-color");
  const [winnerColor, setWinnerColor] = useState("")

  useEffect(() => {
    if (value !== null) {
      setColor(value === "X" ? "x-color" : "o-color");
    }
  }, [value]);

  useEffect(() => {
    if(isWinner) {
      setWinnerColor("winner-color")
    } else {
      setWinnerColor("")
    }
  }, [isWinner])

  return (
    <div className={`box ${color} ${winnerColor}`} onClick={() => handleBoxClick(index)}>
      {value}
    </div>
  );
};
