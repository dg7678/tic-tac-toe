
const HistoryTable = ({historyArray, jumpTo}) => {
  return <div>
    <ol>
      {
        historyArray.map((arrangement, index) => {
          let description;
          if (index === 0) {
            description = "Start Game!";
          } else {
            description = "Go to move #" + index;
          }
          return <li key={index} className={"border-white border-2 rounded-2xl gap-28 bg-amber-100 w-50 h-10 flex justify-center items-center hover:bg-amber-200 active:scale-95 transition"}>
            <button onClick={() => jumpTo(index)}>
              {description}
            </button>
          </li>
        })
      }
    </ol>
  </div>
};

export default HistoryTable;