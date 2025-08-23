import React from 'react'
import NavbarExamples from './components/NavbarExamples';
import HeroSection from './components/HeroSection';
import SmoothScroll from './components/SmoothScroll';
import FeaturesSection from './components/FeatureSection';
import DropDownExamples from './components/DropDownExamples';
import { Button } from '@sume/ui/components/Button';
const page = () => {
  return (
    <div>
      <SmoothScroll>
      <NavbarExamples/>
      <HeroSection/>
      <FeaturesSection/>
       <Button>Primary</Button>
       <Button variant="destructive">lore</Button>
      </SmoothScroll>
     
    </div>
  )
}

export default page