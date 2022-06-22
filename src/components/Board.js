import React, { useState } from "react";
import { Box } from "./Box";

export const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWin = () => {
    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
      const [x, y, z] = WINNING_COMBINATIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        return board[x];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsX(true);
  };

  const winner = checkWin();
  let status = null,
    desk = null;

  if (winner) {
    status = `Winner ${winner}`;
  } else {
    desk = `${isX ? "X" : "O"}'s Turn`;
  }

  const handleBoxClick = (i) => {
    // if there is a winner stop the game.
    if (winner === null) {
      checkWin();
      const updateBoard = [...board];
      if (updateBoard[i] !== null) return;
      updateBoard[i] = isX ? "X" : "O";
      setBoard(updateBoard);
      setIsX(!isX);
    } else {
      return null;
    }
  };

  return (
    <div className="board">
      <div className="info">
        <h2>{status ? status : desk}</h2>
        <button onClick={resetGame} className="reset-btn">
          RESET
        </button>
      </div>
      {board.map((value, index) => {
        return (
          <Box
            key={index}
            value={value}
            index={index}
            handleBoxClick={handleBoxClick}
          />
        );
      })}
    </div>
  );
};
