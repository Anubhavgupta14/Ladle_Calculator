"use client";
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import Link from 'next/link';
import $ from 'jquery';
// import PlainButton from './button/PlainButton';
import "./globals.css"
import menu from "../menu"

// import '../styles/navbar.css'

const Navbar = ({ moveIndex }) => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        let func = () => {
            let navbar = document.getElementsByClassName('navbar')[0];


            $(window).scroll(function () {
                if ($(document).scrollTop() > 20) {
                    $('.navbar').addClass('scrolled-navbar');
                } else {
                    $('.navbar').removeClass('scrolled-navbar');
                }
            });

        }
        if (window.screen.width >= 900) {
            func()
        }
        // else{
        //     document.getElementsByClassName('nav')[moveIndex].classList.add('active-page');
        // }

    }, [])
    let navmove = (i) => {
        let back = document.getElementsByClassName('menu-back')[0];
        back.style.left = `${i * 120}px`;
    }
    let mouseoutfunc = () => {
        let back = document.getElementsByClassName('menu-back')[0];
        back.style.left = `${moveIndex * 120}px`;
    }


    return (
        <>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" strategy="beforeInteractive" referrerpolicy="no-referrer"></Script>
            <div className="navbar-hide">


                <div id="nav-icon3" onClick={()=>{setOpen(!open)}} className={open ? `open` : null}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className='navbar'id='navbar'>
                <div className="navbar-left">
                <Link href={"/"}><h2 className='logo'>Dsign Engg</h2></Link>
                </div>
                <div className="navbar-right">
                    <div className='navrel pos-rel' style={open?{height:"265px"}:{height:"0px"}}>

                        <Link href={"/"}><div className="nav nav1" onMouseEnter={() => { navmove(0) }} onMouseOut={mouseoutfunc} >Home</div></Link>
                        <Link href={"/"}><div className="nav nav2" onMouseEnter={() => { navmove(1) }} onMouseOut={mouseoutfunc} >About us</div></Link>
                        <Link href={"/components/Ladle"}><div className="nav nav3" onMouseEnter={() => { navmove(2) }} onMouseOut={mouseoutfunc} >Product</div></Link>
                        <Link href={"/components/CC_machine"}><div className="nav nav4" onMouseEnter={() => { navmove(3) }} onMouseOut={mouseoutfunc} >Pricing</div></Link>
                        <div className="menu-back" style={{left:moveIndex*120 + 'px'}}></div>
                        {/* <div className="menu-btn">
                            <PlainButton text='Connect Wallet' />
                        </div> */}
                    </div>
                </div>
            </div>
          

        </>
    )
}

export default Navbar