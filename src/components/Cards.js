import React from 'react'
import CardItem from"./CardItem"
import "./Cards.css"

function Cards() {
  return (
    <div className="cards">
        <h1>Check out these destinations</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                     src="images/img-9.jpg"
                     text="Explore the hidden waterfall!"
                     label="Adventure"
                     path="/services"/>
                     <CardItem
                     src="images/img-2.jpg"
                     text="Travel thorough the Islands of Bali!"
                     label="Luxury"
                     path="/services"/>
                     
                </ul>
                <ul className="cards__items">
                <CardItem
                     src="images/img-1.jpg"
                     text="Explore the big mountains with our groups!"
                     label="Adrenaline"
                     path="/services"/>
                     <CardItem
                     src="images/img-3.jpg"
                     text="Get your dreams with special marine services!"
                     label="Adventure"
                     path="/services"/>
                </ul>
                <ul className="cards__items">
                <CardItem
                     src="images/img-4.jpg"
                     text="What about a playing football?"
                     label="Adrenaline"
                     path="/services"/>
                     <CardItem
                     src="images/img-6.jpg"
                     text="Live your dreams with silence!"
                     label="Chilling"
                     path="/services"/>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Cards