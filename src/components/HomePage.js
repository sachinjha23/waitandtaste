import React from 'react'
import CardSection from './CardSection'
import CentreButton from './CentreButton'
import HomeLanding from './HomeLanding'
import CentreHeading from './CentreHeading';
import OfferCardSection from './OfferCardSection';
import ReviewSection from './ReviewSection';
import SocialMedia from './SocialMedia';
import OrderSection from './OrderSection';
import Menu from './Menu';

import burger from '../images/burger1.jpg'
import pizza from '../images/pizza1.jpg'
import noodle from '../images/noodle1.jpg'
import rice from '../images/rice1.jpg'

import icecream3 from '../images/icecream3.jpg'
import momo1 from '../images/momo1.jpg'
import chicken1 from '../images/chicken1.jpg'
import drink2 from '../images/drink2.jpg'

export default function HomePage() {
  return (
    document.title = "Wait & Taste | Home",
    <>
        <HomeLanding/>
        <CentreHeading heading="We Serve"/>
        <CardSection/>
        <CentreButton/>
        <CentreHeading heading="Combo Offer"/>
        <OfferCardSection/>
        <CentreHeading heading="Customer Review"/>
        <ReviewSection/>
        <SocialMedia/>
        <CentreHeading heading="Choose From Menu"/>
        <Menu/>
        <CentreHeading heading="Limited Deal"/>
        <OrderSection OCI1={burger} OCH1="Cheese Burger" OCP1="49"
                      OCI2={pizza} OCH2="Margreta Pizza" OCP2="99"
                      OCI3={noodle} OCH3="Special Noodle" OCP3="59"
                      OCI4={rice} OCH4="Fried Rice" OCP4="59"

                      OCI5={icecream3} OCH5="Ice Cream" OCP5="39"
                      OCI6={momo1} OCH6="Gravy Momos" OCP6="69"
                      OCI7={chicken1} OCH7="Fried Chicken" OCP7="179"
                      OCI8={drink2} OCH8="Cold Drink" OCP8="49"/>
        <CentreButton/>
    </>
  )
}
