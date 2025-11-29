import React from 'react';

import Hero from './Hero';
import Awards from './Awards';

import Pricing from './PricingSection';
import Education from './Education';

import Navbar from '../Navbar';
import Footer from '../footer';
import OpenAccount from '../OpenAccount';
import Statssection from './Statssection';
import Hero1 from './Hero1';
function HomePage() {
  return( 
  <>
       <Hero1/>
      
      <Awards />
      <Statssection/>
      <Pricing />
      <Education />
      <OpenAccount />
      
   </>
  )
}

export default HomePage;