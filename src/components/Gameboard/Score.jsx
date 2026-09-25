import "./Score.css";
export default function Score({ children }) {
  return (
    <>
      <ul id="score-container">{children}</ul>
    </>
  );
}
