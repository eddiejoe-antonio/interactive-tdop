import React, { useState, useEffect } from 'react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Routes, Route } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';
import HeroLayout from './components/HeroLayout';
import IntroPage from './pages/IntroPage';
import VisionPage from './pages/VisionPage';
import NeedsAndAssetsPage from './pages/NeedsAndAssetsPage';
import StakeholderEngagementPage from './pages/StakeholderEngagementPage';
import StrategiesPage from './pages/StrategiesPage';
import ConclusionPage from './pages/ConclusionPage';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DotsNav from './components/DotsNav';
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01, // Adjust as needed
  });

  const props = {
    style: {
      opacity: inView ? 1 : 0,
      transition: 'opacity 0.5s',
    },
  };

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
};

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [calculatedSection, setCalculatedSection] = useState(0);
  const [showNav, setShowNav] = useState(false);

  const sectionData = [
    { name: 'hero', sections: 0 },
    { name: 'intro', sections: 3 },
    { name: 'vision', sections: 3 },
    { name: 'needsandassets', sections: 3 },
    { name: 'stakeholderengagement', sections: 2 },
    { name: 'strategies', sections: 3 },
    { name: 'conclusion', sections: 2 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newSection = Math.floor(scrollPosition / window.innerHeight);
      const calcSection = Math.floor(scrollPosition / (window.innerHeight*3))
      setCurrentSection(newSection);
      setCalculatedSection(calcSection);
      setShowNav(newSection >= 1);
    };

    window.addEventListener('scroll', handleScroll);

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
      {showNav && <Sidebar />}
      {showNav && <Navbar />}
      <Routes>
        <Route path="/about" element={<HeroLayout />} />
        <Route
          path="/"
          element={
            <>
              {sectionData.map((section, index) => (
                <Element key={index} name={section.name}>
                  <FadeInSection>
                    {getPageComponent(section.name, index)}
                  </FadeInSection>
                </Element>
              ))}
              <DotsNav
                totalSections={sectionData[calculatedSection].sections}
                activeSection={currentSection}
                onDotClick={(index) =>
                  scrollToSection(`section${index + 1}`)
                }
              />
            </>
          }
        />
      </Routes>
    </MantineProvider>
  );
};

const getPageComponent = (sectionName) => {
  switch (sectionName) {
    case 'hero':
        return <HeroLayout />;
    case 'intro':
      return <IntroPage />;
    case 'vision':
      return <VisionPage />;
    case 'needsandassets':
      return <NeedsAndAssetsPage />;
    case 'stakeholderengagement':
      return <StakeholderEngagementPage />;
    case 'strategies':
      return <StrategiesPage />;
    case 'conclusion':
      return <ConclusionPage />;
    default:
      return null;
  }
};

export default App;
