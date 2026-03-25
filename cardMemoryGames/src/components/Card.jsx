import React from 'react'

const Card = ({card , onClick}) => {
    return (
    <div className={`card ${card.isFliped ?'flipped':''}`}
    onClick={()=> onClick(card)}
    >
        <div className='card-front'>?</div>
        <div className='card-back'>{card.value}</div>
    </div>
  )
}

export default Card