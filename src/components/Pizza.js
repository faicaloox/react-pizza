import React from 'react'

const Pizza = ({pizza}) => {

  // if (pizza.soldOut) return null;

  return (
    <li className={`pizza ${pizza.soldOut ? "pizza sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
      </div>
    </li>
  )
}

export default Pizza