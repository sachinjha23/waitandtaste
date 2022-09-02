import React from 'react'
import ContactBg from '../images/contactbg.jpg'
import ContactForm from './ContactForm'
import SocialMedia from './SocialMedia'
export default function ContactPage() {
  return (
    document.title = "Wait & Taste | Contact",
    <div className="contact-page">
        <div className="contact-bg">
            <img src={ContactBg} alt="" />
        </div>
        <div className="contact-data">
            <ContactForm/>
            <SocialMedia/>
        </div>
    </div>
  )
}
