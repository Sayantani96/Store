import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import CartAmountToggle from './Components/CartAmountToggle';
import { Button } from './Button/Button';
import { useCartContext } from './Context/CartContext';


const AddToCart = ({product}) => {

const {id,colors,stock}=product;
const [color,setColor]=useState(colors[0]);
const [amount,setAmount]=useState(1);

const {addToCart}=useCartContext();

const setIncrease=()=>{
    amount<=stock?setAmount(amount+1):setAmount(amount);
}

const setDecrease=()=>{
    amount>1?setAmount(amount-1):setAmount(1);
}

const tickHandler=(currColor)=>{
    setColor(currColor);
}
  return (
    <Wrapper>
        <div className='colors'>
            <p>
                Colors:
                {
                    colors.map((currColor,index)=>{
                        return <button 
                        style={{backgroundColor:currColor}} 
                        className={color===currColor?'btnStyle active':'btnStyle'}
                        key={index}
                        onClick={()=>tickHandler(currColor)}
                        >
                            {color===currColor?<FaCheck style={{color:'white'}}/>:null}
                        </button>
                    })
                }
            </p>
            <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease}/>
            <NavLink to="/cart" onClick={()=>addToCart(id,colors,amount,product)}>
              <Button className="btn">Add To Cart</Button>
            </NavLink>
        </div>
    </Wrapper>
    
  )
}

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
    .amount-change{
        font-size:23px;
    }
  }
`;

export default AddToCart