import React, { useState } from "react";
import Board from "./board.jsx";
import HistoryTable from "./historyTable.jsx";

const Game = () => {


  const [turn, setTurn] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const onSquareHandler = (index) => {
    const size = history.length;
    if (index > 8 || history[size-1][index] != null || haveWinner() != null || isBoardFull()) {
      return;
    }
    const newArrangement =  history[size-1].slice();
    newArrangement[index] = turn ? 'X' : 'O';
    setTurn(!turn);
    const newHistory = [...history, newArrangement];
    setHistory(newHistory);
  };

  const haveWinner = () => {
    const winningPositions = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
    const arrangement = history[history.length - 1];
    for(let [a, b, c] of winningPositions) {
      if(arrangement[a] === arrangement[b] &&
        arrangement[b] === arrangement[c] &&
        arrangement[a] != null
      ) {
        return arrangement[a];
      }
    }
    return null;
  }

  const isBoardFull = () => {
    const arrangement = history[history.length - 1];
    for(let a of arrangement) {
      if (a == null) {
        return false;
      }
    }
    return true;
  }

  const jumpToHistory = (historyIndex) => {
    const newHistory = [...history.slice(0,historyIndex + 1)];
    setHistory(newHistory);
    setTurn(historyIndex%2===0);
  }


  const resetBoard = () => {
    setHistory([Array(9).fill(null)]);
    setTurn(true);
  }
  return (
    <div className={"p-10 m-50"}>
      <div className={"flex justify-center items-center gap-28"}>
        <Board
          arrangement={history[history.length-1]} turn={turn}
          haveWinner={haveWinner} onSquareHandler={onSquareHandler} resetBoard={resetBoard}
        />
        <HistoryTable historyArray={history} jumpTo={jumpToHistory}/>
      </div>
    </div>
  );
};

export default Game;