import React from 'react'
import comma from '../images/comma.png'
export default function ReviewBox(props) {
  return (
    <div className='review-box'>
        <div className="review-box-text">
        <div className="review-box-upper-comma">
            <img src={comma} alt="" className='upper-comma comma-img' />
        </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni at molestias.</p>
        <div className="review-box-lower-comma">
            <img src={comma} alt="" className='lower-comma comma-img' />
        </div>
        </div>
        <div className="review-box-img">
            <img src={props.src} alt="" />
        </div>
    </div>
  )
}
