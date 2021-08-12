import React from 'react'
import './card.styles.css'

const Card = props => {
    return(
        <div className="card-container">
            <img src={`https://robohash.org/${props.id}?set=set2`} alt="img" />
            <h1>{props.name}</h1>
            <p>{props.email}</p>
        </div>    
    )
}

export default Card;