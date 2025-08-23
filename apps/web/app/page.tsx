import React from 'react'
import NavbarExamples from './components/NavbarExamples';
import HeroSection from './components/HeroSection';
import SmoothScroll from './components/SmoothScroll';
import FeaturesSection from './components/FeatureSection';
import ComponentShowcase from './components/ComponentShowcase';
import Footer from './components/Footer';

import StatsSection from './components/SatsSection';

import CTASection from './components/CTASection';

const page = () => {
  return (
    <div>
      <SmoothScroll>
        <NavbarExamples/>
        <HeroSection/>
        <FeaturesSection/>
        <ComponentShowcase/>
        <StatsSection/>
        <CTASection/>
        <Footer/>
      </SmoothScroll>
    </div>
  )
}

export default page
