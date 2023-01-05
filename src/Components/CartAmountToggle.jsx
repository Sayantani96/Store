

import React from 'react'

const CartAmountToggle = ({amount,setDecrease,setIncrease}) => {

  return (
    <div className='cart-btn'>
        <div className='amount-toggle'>
            <button onClick={setDecrease} className="amount-change btnStyle">-</button>
            <div className="amount-style">{amount}</div>
            <button onClick={setIncrease} className='amount-change btnStyle'>+</button>
        </div>
    </div>
  )
}

export default CartAmountToggle
