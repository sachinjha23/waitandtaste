import React from 'react'
export default function MenuItems(props) {
  return (
    <div className='menu-items'>
        <div className="menu-items-img">
            <img src={props.img} alt="" />
        </div>
        <div className="menu-items-text">
            <h4>{props.h4}</h4>
        </div>
    </div>
  )
}
