import Square from "./square.jsx";
import ResetIcon from "../assets/reset-svgrepo-com.svg";

const Board = ({arrangement, turn, onSquareHandler, haveWinner, resetBoard}) => {

  const winner = haveWinner();
  const status = winner != null ? "Winner : " + winner : "Next player : " + (turn ? "X" : "O");

  return <div>
    <button className="mt-6 p-3 bg-amber-200 rounded-full flex items-center gap-2 hover:bg-amber-300 active:scale-95 transition" onClick={resetBoard}>
      <img src = {ResetIcon} alt={"Reset"} className={"w-5 h-5"}/>
      <span className="font-semibold text-sm">Reset</span>
    </button>
    <div className={"text-4xl"}> {status} </div>
    <div className={"flex"}>
      <Square onClickHandler={() => onSquareHandler(0)} value={arrangement[0]}/>
      <Square onClickHandler={() => onSquareHandler(1)} value={arrangement[1]}/>
      <Square onClickHandler={() => onSquareHandler(2)} value={arrangement[2]}/>
    </div>
    <div className={"flex"}>
      <Square onClickHandler={() => onSquareHandler(3)} value={arrangement[3]}/>
      <Square onClickHandler={() => onSquareHandler(4)} value={arrangement[4]}/>
      <Square onClickHandler={() => onSquareHandler(5)} value={arrangement[5]}/>
    </div>
    <div className={"flex"}>
      <Square onClickHandler={() => onSquareHandler(6)} value={arrangement[6]}/>
      <Square onClickHandler={() => onSquareHandler(7)} value={arrangement[7]}/>
      <Square onClickHandler={() => onSquareHandler(8)} value={arrangement[8]}/>
    </div>
  </div>
}

export default Board;