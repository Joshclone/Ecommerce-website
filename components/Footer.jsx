import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook,AiFillLinkedin } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>@2023 TradeLinks All rights reserved -joshclone-</p>
      <p className='icons'>
        <a href='https://mobile.twitter.com/Joshclone2' target='blank'>
        <AiOutlineTwitter/>
        </a>
        <a href='https://www.linkedin.com/mwlite/in/joshuanwaeze' target='blank'>
        <AiFillLinkedin/>
        </a>
      
      </p>
    </div>
  )
}

export default Footer
