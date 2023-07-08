import React, { useLayoutEffect, useRef, useState } from "react";

const TextAreaAutoResize = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  //   const [parentHeight, setParentHeight] = useState("auto");

  const handleChange = (e) => {
    setTextareaHeight("auto");
    // setParentHeight("auto");
    setText(e.target.value);
  };

  useLayoutEffect(() => {
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
    // setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);

  return (
    <div
      className="p-5"
      //   style={{
      //     minHeight: parentHeight,
      //   }}
    >
      <textarea
        className="transition-all overflow-hidden w-full max-w-[400px] p-5 rounded-lg border border-gray-400 focus:border-blue-500 resize-none leading-normal"
        placeholder="Please enter your content..."
        value={text}
        ref={textareaRef}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextAreaAutoResize;
