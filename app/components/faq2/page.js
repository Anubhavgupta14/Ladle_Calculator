"use client";
import React, { useState } from 'react'
// import { IoIosArrowDown } from 'react-icons/io'
import { GoChevronDown } from 'react-icons/go'
import "./globals.css"

const Faq = ({ ques, ans, index,active ,setActive}) => {

    const [open, setOpen] = useState(false)
    return (
        <>
            <div data-aos-easing="ease-in-out"
                data-aos-duration="800"
                data-aos-delay={index * 20}
                data-aos-offset="0"
                data-aos="fade-up">
                <div
                    className={`faq ${active == index - 2 ? "open" : null}`}>

                    <div className="faq-title">{ques}
                        <div className={`arrow-cont ${active == index - 2 ? "down-arrow" : null} flex-all`} onClick={() => { active== index - 2?setActive(null): setActive(index - 2) }}><GoChevronDown /></div>
                    </div>
                    <div className="faq-p">{ans}</div>
                </div>
            </div>
            {/* <img src="/bb.png" /> */}
        </>
    )
}

export default Faq