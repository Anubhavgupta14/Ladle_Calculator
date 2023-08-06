import { React, useState } from "react";
// import { a } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const K = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <a href="/">
        <h1>Portfolio</h1>
      </a>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="/project">Project</a>
        </li>

        <li>
          <a href="/about">About</a>
        </li>

        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "black" }} />
        ) : (
          <FaBars size={20} style={{ color: "black" }} />
        )}
      </div>
    </div>
  );
};

export default K;
