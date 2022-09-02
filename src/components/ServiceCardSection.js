import React from 'react'
import ServiceCard from './ServiceCard'
import onlineorder from '../images/onlineorder.png'
import homedelivery from '../images/homedelivery.png'
import hygiene from '../images/hygiene.png'
import nocontaimination from '../images/nocontaimination.png'
import properpacked from '../images/properpacked.png'
import nocoloring from '../images/nocoloring.png'
export default function ServiceCardSection() {
  return (
    <div className="service-card-section-parent">
        <div  className='service-card-section'>
            <ServiceCard heading="Online Order" img={onlineorder}/>
            <ServiceCard heading="Home Delivery" img={homedelivery}/>
            <ServiceCard heading="Proper Hygiene" img={hygiene}/>
    
            <ServiceCard heading="No Coloring" img={nocoloring}/>
            <ServiceCard heading="Proper Packed" img={properpacked}/>
            <ServiceCard heading="No Contaimination" img={nocontaimination}/>
        </div>
    </div>
  )
}
