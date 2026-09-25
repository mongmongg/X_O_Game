import TabButton from "./TabButton/TabButton";

export default function GameOver({ children, onClickHandler }) {
  return (
    <>
      <li className="overlay">
        {children && (
          <>
            <h2>The winner is</h2>
            <h2 className={children}>{children}</h2>
          </>
        )}
        {!children && <h2>Draw</h2>}
        <TabButton className="btn start-btn" onClick={onClickHandler}>
          play again
        </TabButton>
      </li>
    </>
  );
}
