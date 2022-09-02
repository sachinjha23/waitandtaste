import React from 'react'
import OrderCard from './OrderCard'

export default function OrderSection(props) {
  return (
    <div className='order-section'>
        <div className="order-section-grid">
            <OrderCard img={props.OCI1} heading={props.OCH1} price={props.OCP1}/>
            <OrderCard img={props.OCI2} heading={props.OCH2} price={props.OCP2}/>
            <OrderCard img={props.OCI3} heading={props.OCH3} price={props.OCP3}/>
            <OrderCard img={props.OCI4} heading={props.OCH4} price={props.OCP4}/>

            <OrderCard img={props.OCI5} heading={props.OCH5} price={props.OCP5}/>
            <OrderCard img={props.OCI6} heading={props.OCH6} price={props.OCP6}/>
            <OrderCard img={props.OCI7} heading={props.OCH7} price={props.OCP7}/>
            <OrderCard img={props.OCI8} heading={props.OCH8} price={props.OCP8}/>

            
            {/* <OrderCard img={pizza} heading="Margreeta Pizza" price="99"/>
            <OrderCard img={noodle} heading="Veg Noodle" price="79"/>
            <OrderCard img={rice} heading="Fried Rice" price="59"/>

            <OrderCard img={burger2} heading="Black Forest Burger" price="79"/>
            <OrderCard img={pizza2} heading="Chicken Pizza" price="149"/>
            <OrderCard img={noodle2} heading="Soupy Noodle" price="49"/>
            <OrderCard img={rice2} heading="Paneer Fried Rice" price="69"/> */}

        </div>
    </div>
  )
}
