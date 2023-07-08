import React, { useEffect, useRef } from "react";

const InputRef = () => {
  const divRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    console.log(divRef.current);
    // if (divRef.current) divRef.current.style.backgroundColor = "blue";
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div className="input-div" ref={divRef}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Auto focus input"
        className=" inline-block p-5 border border-gray-400 focus:border-green-500"
      />
    </div>
  );
};

export default InputRef;
