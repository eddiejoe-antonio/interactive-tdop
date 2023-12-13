// App.js
import React, { useEffect, useState } from 'react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
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
  const [showNav, setShowNav] = useState(false);

  const sectionData = [
    { name: 'hero', component: <HeroLayout /> },
    { name: 'intro', component: <IntroPage /> },
    { name: 'vision', component: <VisionPage /> },
    { name: 'needsandassets', component: <NeedsAndAssetsPage /> },
    { name: 'stakeholderengagement', component: <StakeholderEngagementPage /> },
    { name: 'strategies', component: <StrategiesPage /> },
    { name: 'conclusion', component: <ConclusionPage /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newSection = Math.floor(scrollPosition / window.innerHeight);
      setCurrentSection(newSection);
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
      {sectionData.map((section, index) => (
        <Element key={index} name={section.name}>
          <FadeInSection>{section.component}</FadeInSection>
        </Element>
      ))}
      {/* <DotsNav
        totalSections={sectionData.length}
        activeSection={currentSection}
        onDotClick={(index) => scrollToSection(`section${index + 1}`)}
      /> */}
    </MantineProvider>
  );
};

export default App;
