import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const handlleFixedHeader = () => {
      const header = document.getElementById("header");
      if (window.scrollY > 100) header.classList.add("fixed");
      else header.classList.remove("fixed");
    };
    window.addEventListener("scroll", handlleFixedHeader);
    return () => {
      window.removeEventListener("scroll", handlleFixedHeader);
    };
  }, []);
  return <div className="p-5 bg-black w-full" id="header"></div>;
};

export default Header;
