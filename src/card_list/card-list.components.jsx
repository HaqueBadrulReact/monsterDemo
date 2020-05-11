import React from 'react';
import {Card} from '../card/card.components'
import './card-list.style.css'
export const CardList=(props)=>
(
    <div className='card-list'>
        {
            props.monsters.map(
                mon=><Card key={mon.id} monster={mon}></Card>
            )
        }
    </div>
)