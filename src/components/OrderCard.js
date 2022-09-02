import React from 'react'
import Button from './Button'
export default function OrderCard(props) {
  return (
    <div className='order-card'>
        <div className="order-card-img">
            <img src={props.img} alt="" />
        </div>
        <div className="order-card-text">
            <div className="order-card-text-heading">
                <h4>{props.heading}</h4>
                <span>&#8377;{props.price}</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, tenetur. Dolore soluta, suscipit eius aperiam consequatur repellendus sed dolorem dolores.</p>
            <Button btn="Order Now"/>
        </div>
    </div>
  )
}
