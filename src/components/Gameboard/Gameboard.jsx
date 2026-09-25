import "./Gameboard.css";
import GameOver from "../GameOver";

export default function Gameboard({
  turns,
  onSelectSquare,
  gameBoard,
  setWinner,
  onClickHandler,
}) {
  let activePlayerSymbol = "x";
  if (turns.length > 0) {
    activePlayerSymbol = turns[0].player === "x" ? "o" : "x";
  }

  return (
    <>
      <h3 id="turn">
        <span className={activePlayerSymbol}>{activePlayerSymbol}</span>'s turn
      </h3>

      <ol id="board">
        {setWinner && (
          <GameOver onClickHandler={onClickHandler}>{setWinner}</GameOver>
        )}
        {setWinner==="draw" && <GameOver onClickHandler={onClickHandler}></GameOver>}
        {gameBoard.map((row, rowIndex) => {
          return (
            <li key={rowIndex}>
              <ol className="row">
                {row.map((playerSymbol, colIndex) => {
                  return (
                    <li key={colIndex}>
                      <button
                        className="box"
                        onClick={() => {
                          onSelectSquare(rowIndex, colIndex);
                        }}
                        disabled={playerSymbol !== " " ? true : false}
                      >
                        <span className={playerSymbol}>{playerSymbol}</span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </li>
          );
        })}
      </ol>
    </>
  );
}
