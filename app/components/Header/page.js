"use client";
import { React, useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";
import "./globals.css"

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  

  return (
    <div className="header">
      <Link href="/">
        <h1>Dsign Engg</h1>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link href="/components/Ladle">Home</Link>
        </li>

        <li>
          <Link href="/project">Project</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
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
