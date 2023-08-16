import React from 'react'
import "./globals.css"

const PlainButton = ({ text }) => {
    return (
        <div id="plainbtn" className='plain-btn flex-all'>
            {text}
        </div>
    )
}

export default PlainButton