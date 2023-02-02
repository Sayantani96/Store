import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import hero from '../../Assets/Hero.jpg';
import { Button } from '../../Button/Button';

const HeroSection = ({heroData}) => {
  return (
    <Wrapper>
        <div className='container'>
            <div className='grid grid-two-column'>
                <div className='hero-section-data'>
                    <div className='intro-data'>
                    Welcome to
                       <h1>Epicerie Store</h1>  
                    </div>
                    <p>
                        {heroData}
                    </p>
                <NavLink to="/products">
                    <Button>Shop Now</Button>
                </NavLink>
              </div>
                    <div className='hero-section-image'>
                        <figure>
                        <img src={hero} alt="hero" className='img-style'/>
                        </figure>
                        
                    </div>
                </div>
        </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
padding: 12rem 0;
img {
  min-width: 10rem;
  height: 10rem;
}
.hero-section-data {
  p {
    margin: 2rem 0;
  }
  h1 {
    text-transform: capitalize;
    font-weight: bold;
  }
  .intro-data {
    margin-bottom: 0;
  }
}
.hero-section-image {
  width: 45%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.grid-two-column{
  display:flex;
  flex-wrap:wrap;
}
figure {
  position: relative;
  &::after {
    content: "";
    width: 60%;
    height: 80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: 50%;
    top: -5rem;
    z-index: -1;
  }
}
.img-style {
  width: 100%;
  height: auto;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 10rem;
  }
  figure::after {
    content: "";
    width: 50%;
    height: 100%;
    left: 0;
    top: 10%;
    /* bottom: 10%; */
    background-color: rgba(81, 56, 238, 0.4);
  }
}
`

export default HeroSection