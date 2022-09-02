import React from 'react'

export default function ContactForm() {
  return (
    <form className='contact-form' action='/'>
        <div className="contact-form-heading">
            <h2>Contact Us</h2>
        </div>
        <div className="contact-form-name">
            <div className="first-name section">
                <label htmlFor="FirstName">First Name</label>
                <input type="text" className='fname input-text' />
            </div>
            <div className="last-name section">
            <label htmlFor="LastName">Last Name</label>
            <input type="text" className='flname input-text' />
            </div>
        </div>
        <div className="contact-form-mail section">
            <label htmlFor="EMail">E-Mail</label>
            <input type="email" name="email"  className='input-text mail'/>
        </div>
        <div className="contact-form-query section">
            <label htmlFor="Query">Ask Your Query</label>
            <textarea name="query"  className='text-area' cols="30" rows="4"></textarea>
        </div>
        <div className="contact-form-button">
            <input type="submit" className='form-btn submit' value="Submit" />
            <input type="reset" className='form-btn reset' value="Reset" />
        </div>
    </form>
  )
}
