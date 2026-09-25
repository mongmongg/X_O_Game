import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import "./Player.css";
export default function Player({
  initialName,
  symbol,
  isActive,
  changeNameHandler,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  let nameInput;
  let btnContent = "edit";
  let isActiveClass = "player-container";

  if (isActive) {
    isActiveClass += " active";
  } else {
    isActiveClass = "player-container";
  }
  function editHandler() {
    if (playerName && playerName.length > 0) {
      setIsEditing((editting) => !editting);
      if (isEditing) {
        changeNameHandler(symbol, playerName);
      }
    } else {
      setPlayerName(initialName);
    }
  }
  function nameChanged(event) {
    setPlayerName(event.target.value);
  }
  if (isEditing) {
    btnContent = "save";
    nameInput = (
      <input
        type="text"
        name={playerName}
        placeholder={playerName}
        minLength="1"
        maxLength="8"
        onChange={nameChanged}
      />
    );
  } else {
    nameInput = <span className="player-name">{playerName}</span>;
  }
  let className = "player-input " + symbol;

  return (
    <>
      <li className={isActiveClass}>
        <p className={className}>{nameInput}</p>
        <p className="score">{symbol}</p>
        <TabButton className="edit-btn btn" onClick={editHandler}>
          {btnContent}
        </TabButton>
      </li>
    </>
  );
}
