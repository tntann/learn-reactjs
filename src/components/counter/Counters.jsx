import React, { useState } from "react";

const Counters = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
    // setCount((count) => count + 1);
  };

  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
        style={{
          display: "inline-block",
          backgroundColor: "#6a5af9",
          fontSize: "18px",
          color: "white",
          margin: "25px",
          padding: "15px 20px",
        }}
      >
        Counter + 1
      </button>
      <span className="count"> {count} </span>
      <button
        onClick={() => {
          handleClick();
          handleClick();
        }}
        style={{
          display: "inline-block",
          backgroundColor: "#6a5af9",
          fontSize: "18px",
          color: "white",
          margin: "25px",
          padding: "15px 20px",
        }}
      >
        Counter + 2
      </button>
    </div>
  );
};

export default Counters;
