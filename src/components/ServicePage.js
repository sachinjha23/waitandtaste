import React from 'react'
import CentreButton from './CentreButton'
import CentreHeading from './CentreHeading'
import OrderSection from './OrderSection'
import ServiceCardSection from './ServiceCardSection'
import ServiceTop from './ServiceTop'
import SocialMedia from './SocialMedia'

import burger from '../images/burger2.jpg'
import pizza from '../images/pizza2.jpg'
import noodle from '../images/noodle2.jpg'
import rice from '../images/rice2.jpg'

import icecream4 from '../images/icecream4.jpg'
import momo2 from '../images/momo2.jpg'
import chicken2 from '../images/chicken2.jpg'
import drink1 from '../images/drink1.jpg'


export default function ServicePage() {
  return (
    document.title = "Wait & Taste | Service",
    <>
        <ServiceTop/>
        <ServiceCardSection/>
        <CentreHeading heading="Try Something New"/>
        {/* <OrderCard/> */}
        <OrderSection OCI1={burger} OCH1="Cheese Burger" OCP1="49"
                      OCI2={pizza} OCH2="Margreta Pizza" OCP2="99"
                      OCI3={noodle} OCH3="Special Noodle" OCP3="59"
                      OCI4={rice} OCH4="Fried Rice" OCP4="59"

                      OCI5={icecream4} OCH5="Black Forest Burger" OCP5="79"
                      OCI6={momo2} OCH6="Chicken Pizza" OCP6="149"
                      OCI7={chicken2} OCH7="Veg Noodle" OCP7="79"
                      OCI8={drink1} OCH8="Plane Rice" OCP8="69"
        />
        <CentreButton/>
        <SocialMedia/>
    </>
  )
}
