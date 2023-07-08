import React from "react";
import "./App.scss";
import "./index.scss";
// import Form from "./components/form/Form";
import MovieSearchApp from "./components/MovieSearchApp";
// import Blog from "./components/Blog";
// import DropDown from "./components/DropDown";
// import InputRef from "./components/InputRef";
// import TextAreaAutoResize from "./components/TextAreaAutoResize";
// import StopWatch from "./components/StopWatch";
// import HackerNews from "./components/news/HackerNews";
// import HackerNewsReducer from "./components/news/HackerNewsReducer";
// import Header from "./components/Header";
// import Timer from "./components/Timer";
// import Photo from "./components/photos/Photo";
// import SideBarMenu from "./components/SideBarMenu";
// import useClickOutSide from "./hook/useClickOutSide";
// import HackerNews from "./components/news/HackerNews";
// import HackerNewsWithHook from "./components/news/HackerNewsWithHook";
// import Card from "./components/card/Card";
// import Card2 from "./components/card/Card2";
// import CardList from "./components/card/CardList";
// import CardTailwind from "./components/card/CardTailwind";
// import { ThemeProvider } from "styled-components";

// import Button from "./components/button/Button";
// import Counters from "./components/counter/Counters";
// import Counter from "./components/counter/Counter";
// import GameReducer from "./components/tictactoe/Game";
// import Toggle from "./components/toggle/Toggle";

// const theme = {
//   color: {
//     blue: "#2979ff",
//   },
//   orange: "#ffa400",
// };

function App() {
  // const [show, setShow] = React.useState(false);
  // const { show, setShow, nodeRef } = useClickOutSide("button");
  return (
    <div>
      {/* <HackerNewsReducer></HackerNewsReducer> */}

      {/* <StopWatch></StopWatch> */}
      {/* <InputRef></InputRef> */}
      {/* <TextAreaAutoResize></TextAreaAutoResize> */}
      {/* <div className="p-5">
        <DropDown></DropDown>
      </div> */}

      {/* <Blog></Blog> */}

      {/* <button onClick={() => setShow(!show)}>Toggle Button</button>
      {show && <HackerNews></HackerNews>} */}

      {/* <HackerNewsWithHook></HackerNewsWithHook> */}

      {/* <button
        onClick={() => setShow(true)}
        className="inline-block m-3 p-3 rounded-lg text-white bg-green-400"
      >
        Show Menu
      </button>
      <SideBarMenu show={show} ref={nodeRef}></SideBarMenu> */}

      {/* <Form></Form> */}
      <MovieSearchApp></MovieSearchApp>
    </div>
  );
}

export default App;
