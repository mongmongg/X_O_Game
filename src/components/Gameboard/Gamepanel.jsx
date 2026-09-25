import { useState } from "react";
import Score from "./Score.jsx";
import Player from "../Player/Player";
import Gameboard from "./Gameboard.jsx";
import TabButton from "../TabButton/TabButton.jsx";
import { WINNING_COMBINATIONS } from "../winning-combination.js";

const PLAYERS = {
  x: "Player 1",
  o: "Player 2",
};

const INITIAL_GAME_BOARD = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
let currentPlayer;
let startGame;
function deriveActivePlayer(gameTurns) {
  if (startGame) {
    currentPlayer = "x";
    if (gameTurns.length > 0 && gameTurns[0].player === "x") {
      currentPlayer = "o";
    }
    return currentPlayer;
  } else {
    currentPlayer = "";
  }
}
function deriveGamboard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol !== " " &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}

export default function Gamepanel() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGamboard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner ? "draw" : null;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prev) => {
      const currentPlayer = deriveActivePlayer(prev);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prev,
      ];
      return updatedTurns;
    });
  }

  function startGameHandler() {
    startGame = true;
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prev) => {
      return { ...prev, [symbol]: newName };
    });
  }

  return (
    <>
      <Score>
        <Player
          initialName={PLAYERS.x}
          symbol="x"
          isActive={activePlayer === "x"}
          changeNameHandler={handlePlayerNameChange}
        ></Player>
        <Player
          initialName={PLAYERS.o}
          symbol="o"
          isActive={activePlayer === "o"}
          changeNameHandler={handlePlayerNameChange}
        ></Player>
      </Score>
      {startGame == true && (
        <Gameboard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
          gameBoard={gameBoard}
          setWinner={winner ? winner : hasDraw}
          onClickHandler={startGameHandler}
        ></Gameboard>
      )}
      <TabButton
        className="btn start-btn"
        onClick={startGameHandler}
        hidden={startGame ? true : false}
      >
        start game
      </TabButton>
    </>
  );
}
