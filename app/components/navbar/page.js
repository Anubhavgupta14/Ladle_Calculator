"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import $ from "jquery";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PlainButton from "../PlainButton/page";
import "./globals.css";
import DropdownButton from "../Dropdown/page";

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
        <div className="navbar-left normal">
          <Link href={"/"}>
            <h2 className="logo">Dsign Engg</h2>
          </Link>

          <div className="navrel pos-rel">
            <Link href={"/"}>
              <div className="nav nav1" >
                Home
              </div>
            </Link>
            <div className="nav nav4" >
              <DropdownButton />
            </div>

            <Link href={"/"}>
              <div className="nav nav2" >
                FAQs
              </div>
            </Link>

            <Link href={"#"}>
              <div className="nav nav3" >
                Pricing
              </div>
            </Link>
          </div>
        </div>
        <div className={click ? "navbar-right" : "navbar-right display-none"}>
          <div className="navrel pos-rel res">
            <Link href={"/"}>
              <div className="nav nav1" >
                Home
              </div>
            </Link>
            <div className="nav nav4" >
              <DropdownButton />
            </div>

            <Link href={"/"}>
              <div className="nav nav2" >
                FAQs
              </div>
            </Link>

            <Link href={"#"}>
              <div className="nav nav3" >
                Pricing
              </div>
            </Link>
            <Link href={"#"}>
              <div className="nav nav3" >
                Login
              </div>
            </Link>
            
            <div className="menu-btn res-btn">
              <PlainButton text="Get Started - Its free" />
            </div>
            <div className="menu-btn res-btn">
              <PlainButton text="Contact Sales" />
            </div>
          </div>

          <div className="navrel pos-rel normal flex-all">
            <Link href="#" className="nav">Login</Link>
            <div className="menu-btn">
              <PlainButton text="Get Started- Its free" />
            </div>
            <div className="menu-btn">
              <PlainButton text="Contact Sales" />
            </div>
          </div>
        </div>
      <div className="hamburger">
        <div>
        <Link href={"/"}>
            <h2 className="logo">Dsign Engg</h2>
          </Link>
        </div>
        <div onClick={handleClick} className="ham-pos">
          {click ? (
            <CloseIcon size={20} style={{ color: "black" }} />
          ) : (
            <MenuIcon size={20} style={{ color: "black" }} />
          )}
        </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
