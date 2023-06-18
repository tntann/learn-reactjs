import "./App.css";
import Counters from "./components/counter/Counters";
import GameReducer from "./components/tictactoe/Game";
import Toggle from "./components/toggle/Toggle";

function App() {
  return (
    <div>
      <Toggle></Toggle>
      <Counters></Counters>
      <GameReducer></GameReducer>
    </div>
  );
}

export default App;
