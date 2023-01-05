import React from 'react'
import FeatureProducts from '../FeatureProducts/FeatureProducts';
import HeroSection from '../Layout/HeroSection'
import Partners from '../Partners';
import Services from '../Services';

const Homepage = () => {
  const homeData='Enjoy your shopping with our curated collections and a 24X7 customer support.'
  return (
    <>
      <HeroSection heroData={homeData}/>
      <FeatureProducts/>
      <Services/>
      <Partners/>
    </>
    
  )
}


export default Homepage