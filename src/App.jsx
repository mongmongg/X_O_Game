import Gamepanel from "./components/Gameboard/Gamepanel.jsx";
import Header from "./components/Header/Header.jsx";

import "./App.css";
function App() {
  return (
    <>
      <section id="panel">
        <Header content="Two player match">Tic-Tac-Toe</Header>
        <Gamepanel></Gamepanel>
      </section>
    </>
  );
}

export default App;
