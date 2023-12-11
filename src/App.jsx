// App.js

import React, { useEffect, useState } from 'react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';
import HeroLayout from './components/HeroLayout';
import IntroPage from './pages/IntroPage';
import VisionPage from './pages/VisionPage';
import NeedsAndAssetsPage from './pages/NeedsAndAssetsPage';
import StakeholderEngagementPage from './pages/StakeholderEngagementPage';
import StrategiesPage from './pages/StrategiesPage';
import ConclusionPage from './pages/ConclusionPage';
import Sidebar from './components/Sidebar';
import DotsNav from './components/DotsNav';
import Navbar from './components/Navbar';

const sectionRoutes = {
  '/': 'section0',
  '/intro': 'section1',
  '/vision': 'section2',
  '/needsandassets': 'section3',
  '/stakeholderengagement': 'section4',
  '/strategies': 'section5',
  '/conclusion': 'section6',
};

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      // Calculate the current section based on scroll position
      const scrollPosition = window.scrollY;
      const newSection = Math.floor(scrollPosition / window.innerHeight);

      // Update currentSection state
      setCurrentSection(newSection);

      // Check if the user has scrolled past the "intro" section
      setShowSidebar(newSection >= 1); // Set to true after scrolling past "intro"
      setShowNavbar(newSection >= 1); // Set to true after scrolling past "intro"
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const scrollToSection = (sectionName) => {
    scroller.scrollTo(sectionName, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  

  return (
    <MantineProvider>
      {showSidebar && <Sidebar />}
      {showNavbar && (
        <Router>
          <Navbar />
        </Router>
      )}
      <Router>
        <Routes>
          {/* <Route path='/' element={
            <Element name="hero">
              <HeroLayout />
            </Element>
          } /> */}
          <Route
            path="/"
            element={
              <>
                <Element name="hero">
                  <HeroLayout />
                </Element>
                <Element name="intro">
                  <IntroPage />
                </Element>
                <Element name="vision">
                  <VisionPage />
                </Element>
                <Element name="needsandassets">
                  <NeedsAndAssetsPage />
                </Element>
                <Element name="stakeholderengagement">
                  <StakeholderEngagementPage />
                </Element>
                <Element name="strategies">
                  <StrategiesPage />
                </Element>
                <Element name="conclusion">
                  <ConclusionPage />
                  {currentSection === sectionRoutes['/conclusion'] && <DotsNav />}
                </Element>
              </>
            }
          />
        </Routes>
      </Router>
    </MantineProvider>
  );
};

export default App;
