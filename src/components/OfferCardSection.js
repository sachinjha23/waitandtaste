import React from 'react'
import OfferCard from './OfferCard'
import burger from '../images/burger.jpg'
import pizza from '../images/pizza.jpg'
import noodle from '../images/noodle.jpg'
import momo from '../images/momo1.jpg'

export default function OfferCardSection() {
  return (
    <div className='offer-card-section'>
        <OfferCard h2="59" h4="Grab Two for 59 Only!!" img={burger}/>
        <OfferCard h2="149" h4="Combo for 149 Only!!" img={pizza}/>
        <OfferCard h2="99" h4="Grab Two for 99 Only!!" img={noodle}/>
        <OfferCard h2="59" h4="Grab Twelve for 59 Only!!" img={momo}/>
    </div>
  )
}
