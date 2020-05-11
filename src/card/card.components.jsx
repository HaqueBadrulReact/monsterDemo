import React from 'react';
import '../card/card.style.css'
export const Card=(props)=>
(
    <div className='card-container'>
        <img alt='load soon' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}></img>
<h1> {props.monster.name}</h1>
<p>{props.monster.username}</p>
<p>{props.monster.email}</p>

    </div>
)