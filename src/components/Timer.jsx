import React, { useState } from "react";
import { useEffect } from "react";

const Timer = () => {
  const [message, setMessage] = useState("Tntan");

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(message);
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [message]);

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default Timer;
