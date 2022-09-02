import React from 'react'
export default function HorizontalCards(props) {
  return (
    <div className="card-body">
        <div className="card-img">
            <img src={props.img} alt="" />
        </div>
        <div className="card-text">
            <h4>{props.heading}</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe perspiciatis ex quos</p>
        </div>
    </div>
  )
}
