import React, { useState } from 'react'
// import Button from '../Button'
import PlainButton from '../PlainButton/page'
import Faq from '../faq2/page'
import "./globals.css"
// import Link from 'next/link'

const Faqs = () => {
    const [num, setNum] = useState(5)
    const [active, setActive] = useState(null);
    let faqs = [
        {
            ques: "What is a non-fungible token (NFT)?",
            ans: "We can describe an NFT as a cryptographic token that defines an asset uniquely. It can represent both a digital asset such as an image, but it can also track real-world assets, such as a house or car, or a song, for example. As you can uniquely define assets, this means you can also prove ownership over said assets, and moreover, prove their authenticity."
        },
        {
            ques: "Why do we need non-fungible tokens to uniquely track assets?",
            ans: "The problem with regular tokens created using the ERC-20 standard is that they are divisible and can be interchanged. We don t want this property for tracking unique assets. This would mean you can divide your digital image or physical car into different tokens and distribute it. That would defeat the whole purpose of non-fungible tokens, as you want only one of them pointing to a single asset. Moreover, if we can make copies of tokens, it becomes impossible to uniquely define them. For that reason, non-fungible tokens solve the interchangeability problem"
        },
        {
            ques: "What makes NFTs so desired?",
            ans: "The three properties that make NFTs so desired are uniqueness, rarity, and indivisibility. What makes NFTs unique is that NFTs allow you to uniquely define an asset by providing metadata that describes the asset and sets it apart from other assets. What makes NFTs rare is that with NFTs, it's not possible to infinitely create new assets. Rarity makes sure that you can only define each asset once on the blockchain, which makes NFTs so desired among collectors"
        },
        {
            ques: "Why would I want to own an NFT?",
            ans: "This can be one of many things. The simplest of which would be your love for the Art or creator you want to support. We can also look at the utilitarian value as a big draw for many creators.It is also bought for its uniqueness. If you own an NFT edition of an artwork, that would make you the only person in the world to own."
        },
        {
            ques: "On which network does Hefty Art work?",
            ans: "Hefty Art, a curated art marketplace, works on the Polygon and ERC-20 Network that allows users to buy and sell NFT Art from its one of a kind digital art platforms"
        },
        {
            ques: "How do I buy an NFT",
            ans: "You can buy NFTs on HeftyART.com. The process is similar to a purchase of any ecommerce item. You would need a Cryptocurrency wallet to purchase an NFT."
        },
        {
            ques: "How do I know that the NFT is authentic",
            ans: "NFT ownership is recorded on the blockchain, and that entry acts as a digital pink slip. Where is the blockchain? It is decentralised, so it exists across many people's computers in encrypted bits and pieces. Our first NFT has been created in conjunction with the MF Husain Foundation - with the physical piece to be handed over to the winner of the auction - so you can certain of its authenticity."
        },
        {
            ques: "Do all digital assets qualify as NFTs?",
            ans: "NFTs can really be anything digital can be any type of media including but not limited to art, videos, music, GIFs, games, tweets and memes.But a lot of the current excitement is around using the tech to sell digital art. The non-fungible part means the object is unique, making it irreplaceable."
        },
        {
            ques: "How do NFTs work?",
            ans: "NFTs are part of a certain blockchain and are individual tokens with extra information stored in them. That extra information is the important part, which allows them to take the form of art, music, video (and so on), in the form of JPGS, MP3s, videos, GIFs and more. Because they hold value, they can be bought and sold just like other types of art and, like with physical art, the value is largely set by the market and by demand."
        },
        {
            ques: "Why are NFTs important",
            ans: "How is the hype around NFTs explained? As a digital record of a real-world asset, NFTs can be used to obtain and exchange ownership of physical assets in a digital marketplace. That has the potential to drive the NFT revolution in the buying and selling of rare and valuable items."
        },
        {
            ques: "How are NFTs created?",
            ans: "The process of creating an NFT is known as minting a reference to the way a physical coin is minted by a manufacturer. NFTs are minted through an NFT marketplace, where a creator uploads a digital file and assigns characteristics, such as whether it is a one-off, has multiple copies or is part of a collection. When an NFT is minted , on the blockchain and the associated content uploaded, the owner has proof that they are the sole holder of the token, establishing the scarcity of the asset."
        },
        {
            ques: "Why are NFTs attractive?",
            ans: "NFTs are attractive for investors because, as with any other asset that carries value, they can be bought and sold for a profit on an NFT market if the value rises. Institutional funds are getting in on the opportunity, with cryptocurrency investment firms buying digital collectibles to create value for their clients."
        }


    ]
    function findPos(obj) {
        var curtop = 0;
        if (obj.offsetParent) {
            do {
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
            return [curtop];
        }
    }
    let loadless = () => {
        setNum(5);
        window.scrollTo(0, findPos(document.getElementById("fcont")) - 80)

    }

 
    return (
        <>
            <div className="faq-bg">

                <div className="faqs-cont">
                    <div className="faqs-title ha-title">
                        <div className="faq-one" data-aos-easing="ease-in-out"
                            data-aos-duration="800"
                            data-aos-delay="0"
                            data-aos="fade-up" >Frequently Asked</div>
                        <div className="faq-two" data-aos-easing="ease-in-out"
                            data-oas-once={true}
                            data-aos-duration="800"
                            data-aos-delay="100"
                            data-aos="fade-up" >Questions</div>
                    </div>
                    <div className="faq-cont" id="fcont">
                        {
                            faqs.slice(0, num).map((faq, index) => {
                                return (

                                    <div key={index} >
                                        <Faq ques={faq.ques} ans={faq.ans} index={index + 2} active={active} setActive={setActive} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* <div className="learn flex-all" >Load More</div> */}
                <div className="faq-btn" data-aos-easing="ease-in-out"
                    data-aos-duration="800"
                    data-aos-delay="300"
                    data-aos="fade-up"
                    data-aos-once={true}
                    // onClick={() =>  { num<faqs.length?setNum(num + 5):setNum(num - 5) }}>
                    onClick={() => { num == 5 ? setNum(faqs.length) : loadless() }} >
                    {/* <Button text='Load More' /> */}
                    <PlainButton text={num == 5 ? "Load More" : "Load less"} />
                </div>
            </div>
        </>
    )
}

export default Faqs