import React from 'react'
import ReviewBox from './ReviewBox'
import men from '../images/customer.jpg'
import girl from '../images/customer1.jpg'
import girl2 from '../images/customer3.jpg'
export default function ReviewSection() {
  return (
    <div className='review-section'>
        <ReviewBox src={girl}/>
        <ReviewBox src={men}/>
        <ReviewBox src={girl2}/>
    </div>
  )
}
