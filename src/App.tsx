/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Hero } from './components/sections/Hero';
import { 
  About, 
  Journey, 
  WhyUs, 
  CourseDetails,
  Testimonials, 
  Registration, 
  FAQ, 
  CTA, 
  Footer 
} from './components/sections/LandingSections';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';
import { Navbar } from './components/ui/Navbar';

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <WhyUs />
        <CourseDetails />
        <Testimonials />
        <Registration />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
