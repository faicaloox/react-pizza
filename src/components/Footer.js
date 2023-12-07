import React from 'react'
import Order from './Order'

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <div className="order">
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00.
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  )
}

export default Footer