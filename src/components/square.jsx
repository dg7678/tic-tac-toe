
const Square = ({value, onClickHandler}) => {
  return <button className="w-24 h-24 flex items-center justify-center bg-amber-100 border-2 border-amber-400 m-1 rounded-2xl text-4xl hover:bg-amber-200 active:scale-95 transition" onClick={() => {
    onClickHandler();
  }}>
    {value}
  </button>
}

export default Square;