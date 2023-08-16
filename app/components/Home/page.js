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
                                data-aos="fade-up">Collect and own the eternal works of legendary Indian Artist Maqbool Fida Husain, and help execute our vision of an Immersive Open Metaverse that redefines the traditional Art buying experience.
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
                    <div className="drop-right artist">
                        <div className="artist-cont">
                            <div className="artist-img">
                                <img src="/logo.png" />
                            </div>
                            <div className="artist-info">
                                <div className="artist-p">Founder</div>
                                <div className="artist-name">Name</div>
                            </div>
                            {/* <div className="circle-cont">
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                            </div> */}

                        </div>

                    </div>
                </div>
            </div>
            <About/>
            <Faqs/>
            <Footer/>
    </>
  )
}

export default page
