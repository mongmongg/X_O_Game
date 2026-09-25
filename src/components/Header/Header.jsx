import gameLogo from "/game-logo2.png";
import "./Header.css";
export default function Header({ children, content }) {
  return (
    <>
      <img src={gameLogo} alt={children} />
      <h1>{children}</h1>
      <p>{content}</p>
    </>
  );
}
