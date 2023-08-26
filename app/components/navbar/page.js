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
  const [click2, setClick2] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const handleClick2 = () => {
    setClick(!click2);
  };

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const open_menu = () => {
    setOpen(!open);
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
    <nav>
      <div className={color ? (open ? "navbar":"navbar scrolled-navbar") : "navbar"} id="navbar">
        <div className="navbar-left normal">
          <Link href={"/"}>
            <h2 className="logo">Dsign Engg</h2>
          </Link>

          <div className="navrel pos-rel">
            <Link href={"/"}>
              <div className="nav nav1">Home</div>
            </Link>

            <div className="nav nav4" onClick={open_menu}>
              Product {open ? '▲' : '▼'}
            </div>

            <Link href={"#faq"}>
              <div className="nav nav2">FAQs</div>
            </Link>

            <Link href={"#"}>
              <div className="nav nav3">Pricing</div>
            </Link>
          </div>
        </div>
        <div className={click ? "navbar-right" : "navbar-right display-none"}>
          <div className="navrel pos-rel res">
            <Link href={"/"}>
              <div className="nav nav1">Home</div>
            </Link>

            <div className="nav nav4" onClick={open_menu}>
              Product {open ? '▲' : '▼'}
              
            </div>

            <Link href={"#faq"}>
              <div className="nav nav2">FAQs</div>
            </Link>

            <Link href={"#"}>
              <div className="nav nav3">Pricing</div>
            </Link>

            <Link href={"#"}>
              <div className="nav nav3">Login</div>
            </Link>

            <div className="menu-btn res-btn">
              <Link href="./components/CC_machine">
                <PlainButton text="Get Started- Its free" />
              </Link>
            </div>
            <div className="menu-btn res-btn">
              <Link href="/components/contact_us">
                <PlainButton text="Contact Sales" />
              </Link>
            </div>
          </div>

          <div className="navrel pos-rel normal flex-all">
            <Link href="#" className="nav">
              Login
            </Link>
            <div className="menu-btn">
              <Link href="/components/CC_machine">
                <PlainButton text="Get Started- Its free" />
              </Link>
            </div>
            <div className="menu-btn">
              <Link href="/components/contact_us">
                <PlainButton text="Contact Sales" />
              </Link>
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
      
      <div
        className={
          open
            ? "drop-menu drop-display-none"
            : "drop-menu"
        }
      >

        <div className="drop-details">
          <div className="ham2">
          <h2>CCM Solution</h2>
          <div onClick={handleClick2} className="ham-pos">
            {click ? (
              <CloseIcon size={20} style={{ color: "black" }} />
            ) : (
              <CloseIcon size={20} style={{ color: "black" }} />
            )}
          </div>
          </div>
          <p>Welcome to our realm of Metallurgical Excellence! Embrace the
                art and science of Ladle Calculations and Continuous Casting
                Machine (CCM) Solutions with us. Dive into the fascinating world
                of metallurgy, where innovation and precision forge the future.
                Explore our expertise, resources, and insights that power the
                heart of industries. Your journey into the realm of metallurgy
                begins here.</p>
          <Link href="/components/CC_machine"><button className="button">Visit</button></Link>
        </div>
        <div className="drop-details">
          <h2>Ladle Calculator</h2>
          <p>Welcome to our realm of Metallurgical Excellence! Embrace the
                art and science of Ladle Calculations and Continuous Casting
                Machine (CCM) Solutions with us. Dive into the fascinating world
                of metallurgy, where innovation and precision forge the future.
                Explore our expertise, resources, and insights that power the
                heart of industries. Your journey into the realm of metallurgy
                begins here.</p>
          <Link href="/components/Ladle"><button className="button">Visit</button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
