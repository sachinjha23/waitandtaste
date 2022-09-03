import React from 'react'
import HorizontalCards from './HorizontalCards'
import breakfast from '../images/breakfast.png'
import lunch from '../images/lunch.png'
import food from '../images/food.png'
import icecream from '../images/icecream.png'
import junkfood from '../images/junkfood.png'
import drink from '../images/drink.png'

export default function CardSection() {
  return (
    <div className="card-section-parent">
        <div className="card-section">
            <HorizontalCards heading="Breakfast" img={breakfast} />
            <HorizontalCards heading="Lunch" img={lunch}/>
            <HorizontalCards heading="Dinner" img={food}/>
            <HorizontalCards heading="Ice Creams" img={icecream}/>
            <HorizontalCards heading="Junk Food" img={junkfood}/>
            <HorizontalCards heading="Cold Drinks" img={drink}/>
        </div>
    </div>
  )
}
