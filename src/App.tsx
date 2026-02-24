/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import EngagementManager from './components/EngagementManager';
import Home from './pages/Home';
import DigitalMarketing from './pages/DigitalMarketing';
import AIAgents from './pages/AIAgents';
import RestaurantAI from './pages/RestaurantAI';
import RealEstateAI from './pages/RealEstateAI';
import DentistAI from './pages/DentistAI';
import About from './pages/About';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToTop />
      <EngagementManager />
      <div className="relative min-h-screen flex flex-col">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-brand-blue z-[60] origin-left"
          style={{ scaleX }}
        />

        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/ai-agents" element={<AIAgents />} />
            <Route path="/industries/restaurant-ai" element={<RestaurantAI />} />
            <Route path="/industries/real-estate-ai" element={<RealEstateAI />} />
            <Route path="/industries/dentist-ai" element={<DentistAI />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
