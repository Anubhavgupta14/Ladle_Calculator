"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import $ from "jquery";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PlainButton from '../PlainButton/page';
import "./globals.css";
import menu from "../menu";

// import '../styles/navbar.css'

const Navbar = ({ moveIndex }) => {
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    console.log(click);
  };

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

  
  let navmove = (i) => {
    let back = document.getElementsByClassName("menu-back")[0];
    back.style.left = `${i * 120}px`;
  };
  let mouseoutfunc = () => {
    let back = document.getElementsByClassName("menu-back")[0];
    back.style.left = `${moveIndex * 120}px`;
  };

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
        crossorigin="anonymous"
        strategy="beforeInteractive"
        referrerpolicy="no-referrer"
      ></Script>
      <div className={color ? "navbar scrolled-navbar" : "navbar"} id="navbar">
        <div className="navbar-left">
          <Link href={"/"}>
            <h2 className="logo">Dsign Engg</h2>
          </Link>
        </div>
        <div className={click ? "navbar-right" : "navbar-right display-none"}>
          <div
            className="navrel pos-rel"
            
          >
            <Link href={"/"}>
              <div
                className="nav nav1"
                onMouseEnter={() => {
                  navmove(0);
                }}
                onMouseOut={mouseoutfunc}
              >
                Home
              </div>
            </Link>
            <Link href={"/"}>
              <div
                className="nav nav2"
                onMouseEnter={() => {
                  navmove(1);
                }}
                onMouseOut={mouseoutfunc}
              >
                About us
              </div>
            </Link>
            <Link href={"/components/Ladle"}>
              <div
                className="nav nav3"
                onMouseEnter={() => {
                  navmove(2);
                }}
                onMouseOut={mouseoutfunc}
              >
                Product
              </div>
            </Link>
            <Link href={"/components/CC_machine"}>
              <div
                className="nav nav4"
                onMouseEnter={() => {
                  navmove(3);
                }}
                onMouseOut={mouseoutfunc}
              >
                Pricing
              </div>
            </Link>
            <div
              className="menu-back"
              style={{ left: moveIndex * 120 + "px" }}
            ></div>
            <div className="menu-btn">
                            <PlainButton text='Sign In / Sign up' />
                        </div>
          </div>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <CloseIcon size={20} style={{ color: "black" }} />
          ) : (
            <MenuIcon size={20} style={{ color: "black" }} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
