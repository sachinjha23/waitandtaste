import React from 'react'
import whatsapp from '../images/whatsapp.png'
import instagram from '../images/instagram.png'
import youtube from '../images/youtube.png'
import twitter from '../images/twitter.png'
export default function SocialMedia() {
  return (
    <div className='social-media'>
        <div className="whatsapp media">
            <img src={whatsapp} alt="" className='whatsapp-img' />
        </div>
        <div className="instagram media">
            <img src={instagram} alt="" className='instagram-img' />
        </div>
        <div className="youtube media">
            <img src={youtube} alt=""  className='youtube-img'/>
        </div>
        <div className="twitter media">
            <img src={twitter} alt=""  className='twitter-img'/>
        </div>
    </div>
  )
}
