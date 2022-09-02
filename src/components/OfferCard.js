import React from 'react'
import Button from './Button'
export default function OfferCard(props) {
  return (
    <div className='offer-card'>
        <img src={props.img} alt="" />
        <div className="offer-card-text">
            <h2>{props.h2}</h2>
            <h4>{props.h4}</h4>
            <p>Lorem ipsum dolor sit amet consectetur.  ipsum dolor sit amet consectetur.</p>
            <Button btn="Grab Now"/>
        </div>
    </div>
  )
}
