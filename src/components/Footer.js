import React from 'react'
import { useGlobalContext } from '../services/context'

const Footer = () => {
    const {total, clearCart} = useGlobalContext()
  return (
    <footer>
        <div className="top">
        <p>Total</p>
        <p>${total}</p>
        </div>

        <button className='clear' onClick={clearCart}>
            CLEAR CART
        </button>
    </footer>
  )
}

export default Footer