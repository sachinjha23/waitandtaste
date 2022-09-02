import React from 'react'
import MenuItems from './MenuItems'
import burger1 from '../images/burger1.jpg'
import burger2 from '../images/burger2.jpg'
import pizza1 from '../images/pizza1.jpg'
import pizza2 from '../images/pizza2.jpg'
import noodle1 from '../images/noodle1.jpg'
import noodle2 from '../images/noodle2.jpg'
import icecream1 from '../images/icecream1.jpg'
import icecream2 from '../images/icecream2.jpg'
import rice1 from '../images/rice1.jpg'
import rice2 from '../images/rice2.jpg'
import drink1 from '../images/drink1.jpg'
import drink2 from '../images/drink2.jpg'
export default function Menu() {
  return (
    <div className="menu-container">
        <div className='menu'>
            <MenuItems h4="Cheese Burger" img={burger1}/>
            <MenuItems h4="Black Forest Burger" img={burger2}/>
            <MenuItems h4="Margretea Pizza" img={pizza1}/>

            <MenuItems h4="Cheese Pizza" img={pizza2}/>
            <MenuItems h4="Singapoori Chowmin" img={noodle1}/>
            <MenuItems h4="Chicken Chowmin" img={noodle2}/>

            <MenuItems h4="Fried Rice" img={rice1}/>
            <MenuItems h4="Singapoori Rice" img={rice2}/>
            <MenuItems h4="Butterscotch IceCream" img={icecream1}/>

            <MenuItems h4="Vanila IceCream" img={icecream2}/>
            <MenuItems h4="Vergin Moetto" img={drink1}/>
            <MenuItems h4="Mint Water" img={drink2}/>
        </div>
    </div>
  )
}
