import React from "react";
import useLinkNewTab from "../hook/useLinkNewTab";
import useHover from "../hook/useHover";

const Blog = () => {
  const { contentRef } = useLinkNewTab();
  const { hovered, nodeRef } = useHover();
  return (
    <div className="entry-content" ref={contentRef}>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ea!
        Inventore ut asperiores qui eos atque voluptates eum quos? Atque
        similique aliquid excepturi, nam accusamus autem nisi dolorum iure odio?
        <a href="https://www.google.com/" className=" underline">
          google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ea!
        Inventore ut asperiores qui eos atque voluptates eum quos? Atque
        similique aliquid excepturi, nam accusamus autem nisi dolorum iure odio?
        <a
          href="https://www.google.com/"
          className={`underline ${hovered ? "text-blue-400" : ""}`}
          ref={nodeRef}
        >
          google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ea!
        Inventore ut asperiores qui eos atque voluptates eum quos? Atque
        similique aliquid excepturi, nam accusamus autem nisi dolorum iure odio?
        <a href="https://www.google.com/" className=" underline">
          google.com
        </a>
        ?
      </p>
    </div>
  );
};

export default Blog;
