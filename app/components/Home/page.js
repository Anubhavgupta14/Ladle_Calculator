"use client";
import Navbar from "../navbar/page"
// import { AiFillMail } from 'react-icons/ai'
// import PlainButton from '../button/PlainButton'
import "./globals.css"
import About from "../About/page"
import Faqs from "../Faq/page"
import Footer from "../Footer/page"

const page = () => {
  return (
    <>
        <Navbar/>
        <div className="drop-mar">
                <div className="drop-cont">
                    <div className="drop-left">
                        <div className="drop-inner">
                            <div className="drop-p" data-aos-easing="ease-in-out"
                                data-aos-duration="800"
                                data-aos-delay="0"
                                data-aos="fade-up">Dsign Engg

                            </div>
                            <div className="drop-p" data-aos-easing="ease-in-out"
                                data-aos-duration="800"
                                data-aos-delay="300"
                                data-aos="fade-up"> Fastest way to your problems
                            </div>
    
                            <div className="drop-info" data-aos-easing="ease-in-out"
                                data-aos-duration="800"
                                data-aos-delay="600"
                                data-aos="fade-up">Welcome to our realm of Metallurgical Excellence! Embrace the art and science of Ladle Calculations and Continuous Casting Machine (CCM) Solutions with us. Dive into the fascinating world of metallurgy, where innovation and precision forge the future. Explore our expertise, resources, and insights that power the heart of industries. Your journey into the realm of metallurgy begins here.
                            </div>

                        </div>
                    </div>
                    <div className="drop-right">
                        <div className="drop-img-cont ">
                            
                            <div className="inner-img">
                                <img src="https://res.cloudinary.com/dhlsvwpny/image/upload/v1692183349/vertical-shot-adult-industrial-worker-uniforms-melting-metal-factory_1_bqzduy.jpg"/>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="extra-cont flex-all">
                    <div className='left-artist'></div>
                    
                </div>
            </div>
            <About/>
            <Faqs/>
            <Footer/>
    </>
  )
}

export default page
