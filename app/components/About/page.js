"use client";
import React, { useEffect,useState } from 'react'
import "./globals.css"

const About = () => {
    const [show,setShow] = useState(false)

    useEffect(() => {
        let bool = true;
let func = () =>{
    let box = document.getElementsByClassName('about-cont-black')[0];

    let black = document.getElementsByClassName('full-circle')[0];
    if(bool){
    window.addEventListener('scroll',()=>{
        if(box.getBoundingClientRect().y<window.screen.height/1.75){
            black.classList.add('anime-circle')
            setTimeout(() => {
                setShow(true)
            }, 1000);
            bool = false;
        }
    })
}

    

}
func()
    }, [])

    return (
        <>
            <div className="about-cont-black flex-all">
                <div className="full-circle"></div>
                {show&&
                <>
                <div data-aos-easing="ease-in-out"
          data-aos-duration="800"
          data-aos-delay="0"
          data-aos="fade-up"
          data-aos-once={true} 
          className="hefty-title about-left flex-all ha-title">
                    HEFTY ART
                </div>
                <div  className="hefty-p about-right flex-all">
                    <div className="hefty-info" data-aos-easing="ease-in-out"
                    data-aos-once={true} 
          data-aos-duration="800"
          data-aos-delay="0"
          data-aos="fade-up" >
                        Hefty art Is an exclusively curated platform that enables artists to
                        immortalise their work in the form of non-fungible tokens (NFTs)
                        which can then be collected and traded by connoisseurs.
                        Homegrown in India, art for the world. Bringing legendary artists as
                        well as untapped talent to the blockchain.
                    </div>
                </div>
                </>
}
            </div>
        </>
    )
}

export default About