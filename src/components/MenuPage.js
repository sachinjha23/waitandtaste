import React from 'react'
import MenuTop from './MenuTop'
import CentreHeading from './CentreHeading'
import OrderSection from './OrderSection'

import burger from '../images/burger1.jpg'
import burger2 from '../images/burger2.jpg'
import burger3 from '../images/burger3.jpg'
import burger4 from '../images/burger4.jpg'

import pizza from '../images/pizza1.jpg'
import pizza2 from '../images/pizza2.jpg'
import pizza3 from '../images/pizza3.jpg'
import pizza4 from '../images/pizza4.jpg'

import noodle from '../images/noodle1.jpg'
import noodle2 from '../images/noodle2.jpg'
import noodle3 from '../images/noodle3.jpg'
import noodle4 from '../images/noodle4.jpg'

import momo from '../images/momo1.jpg'
import momo2 from '../images/momo2.jpg'
import momo3 from '../images/momo3.jpg'
import momo4 from '../images/momo4.jpg'

import chicken1 from '../images/chicken1.jpg'
import chicken2 from '../images/chicken2.jpg'
import chicken3 from '../images/chicken3.jpg'
import chicken4 from '../images/chicken4.jpg'

import mutton1 from '../images/mutton1.jpg'
import mutton2 from '../images/mutton2.jpg'
import mutton3 from '../images/mutton3.jpg'
import mutton4 from '../images/mutton4.jpg'

import paneer1 from '../images/paneer1.jpg'
import paneer2 from '../images/paneer2.jpg'
import paneer3 from '../images/paneer3.jpg'
import paneer4 from '../images/paneer4.jpg'

import rice from '../images/rice1.jpg'
import rice2 from '../images/rice2.jpg'
import rice3 from '../images/rice3.jpg'
import rice4 from '../images/rice4.jpg'
import SocialMedia from './SocialMedia'

// import icecream4 from '../images/icecream4.jpg'
// import chicken2 from '../images/chicken2.jpg'
// import drink1 from '../images/drink1.jpg'

export default function MenuPage() {
  return (
    document.title = "Wait & Taste | Menu",
    <>
        <MenuTop/>
        <CentreHeading heading=" Burger & Pizza "/>
        <OrderSection OCI1={burger} OCH1="Cheese Burger" OCP1="49"
                      OCI2={burger2} OCH2="Margreta Pizza" OCP2="99"
                      OCI3={burger3} OCH3="Special Noodle" OCP3="59"
                      OCI4={burger4} OCH4="Fried Rice" OCP4="59"

                      OCI5={pizza} OCH5="Black Forest Burger" OCP5="79"
                      OCI6={pizza2} OCH6="Chicken Pizza" OCP6="149"
                      OCI7={pizza3} OCH7="Veg Noodle" OCP7="79"
                      OCI8={pizza4} OCH8="Plane Rice" OCP8="69"
        />
        <CentreHeading heading=" Momos & Noodles "/>
        <OrderSection OCI1={noodle} OCH1="Cheese Burger" OCP1="49"
                      OCI2={noodle2} OCH2="Margreta Pizza" OCP2="99"
                      OCI3={noodle3} OCH3="Special Noodle" OCP3="59"
                      OCI4={noodle4} OCH4="Fried Rice" OCP4="59"

                      OCI5={momo} OCH5="Black Forest Burger" OCP5="79"
                      OCI6={momo2} OCH6="Chicken Pizza" OCP6="149"
                      OCI7={momo3} OCH7="Veg Noodle" OCP7="79"
                      OCI8={momo4} OCH8="Plane Rice" OCP8="69"
        />
        <CentreHeading heading=" Non-Veg Special "/>
        <OrderSection OCI1={chicken1} OCH1="Cheese Burger" OCP1="49"
                      OCI2={chicken2} OCH2="Margreta Pizza" OCP2="99"
                      OCI3={chicken3} OCH3="Special Noodle" OCP3="59"
                      OCI4={chicken4} OCH4="Fried Rice" OCP4="59"

                      OCI5={mutton1} OCH5="Black Forest Burger" OCP5="79"
                      OCI6={mutton2} OCH6="Chicken Pizza" OCP6="149"
                      OCI7={mutton3} OCH7="Veg Noodle" OCP7="79"
                      OCI8={mutton4} OCH8="Plane Rice" OCP8="69"
        />
        <CentreHeading heading=" Veg Special "/>
        <OrderSection OCI1={paneer1} OCH1="Cheese Burger" OCP1="49"
                      OCI2={paneer2} OCH2="Margreta Pizza" OCP2="99"
                      OCI3={paneer3} OCH3="Special Noodle" OCP3="59"
                      OCI4={paneer4} OCH4="Fried Rice" OCP4="59"

                      OCI5={rice} OCH5="Black Forest Burger" OCP5="79"
                      OCI6={rice2} OCH6="Chicken Pizza" OCP6="149"
                      OCI7={rice3} OCH7="Veg Noodle" OCP7="79"
                      OCI8={rice4} OCH8="Plane Rice" OCP8="69"
        />
        <SocialMedia/>
    </>
  )
}
