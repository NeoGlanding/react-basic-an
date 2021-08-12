import React from 'react';
import Card from '../card/card.component';
import './card-list-styles.css'

const CardList = props => {
    return (
        <div className="card-list">
           {props.friends.map(friend => <Card key={friend.id} id={friend.id} name={friend.name} email={friend.email}></Card>)} 
        </div>
    )
}

export default CardList;