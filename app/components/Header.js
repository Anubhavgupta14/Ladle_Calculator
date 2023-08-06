import { React, useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
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
  useEffect(() => {
    // Add event listener on component mount
    window.addEventListener("scroll", changeColor);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <a href="/">
        <h1>Dsign Engg</h1>
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
          <CloseIcon size={20} style={{ color: "black" }} />
        ) : (
          <MenuIcon size={20} style={{ color: "black" }} />
        )}
      </div>
    </div>
  );
};

export default Header;
