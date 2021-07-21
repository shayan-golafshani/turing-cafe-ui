import React from 'react';
import './Card.css'

const Card = ({id,name,date,time,number}) => {
    return (
        <section
        className='reservationCard'
        id={id}
        key={id}
        >
            <h3>Guest Name: {name}</h3>
            <p>Reservation Date: {date}</p>
            <p>Reservation Time: {time} P.M.</p>
            <p>Party Size: {number}</p>
        </section>
    )
}

export default Card;