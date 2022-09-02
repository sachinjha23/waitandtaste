import React from 'react'
export default function ServiceCard(props) {
  return (
    <div className='service-card'>
        <div className="service-card-img">
            <img src={props.img} alt="" />
        </div>
        <h4 className="service-card-heading">{props.heading}</h4>
        <p className="service-card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt explicabo, illo voluptate maxime asperiores cum?</p>
    </div>
  )
}
