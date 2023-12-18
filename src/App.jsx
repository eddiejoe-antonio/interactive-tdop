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
  const [currentPage, setCurrentPage] = useState('');
  const [currentSection, setCurrentSection] = useState(0);
  const [showNav, setShowNav] = useState(false);
  

  const handlePageChange = (pageName, sections) => {
    setCurrentPage({ name: pageName, sections });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust as needed
      const newSection = Math.floor(scrollPosition / window.innerHeight);
      setCurrentSection(newSection);
      setShowNav(newSection >= 1);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <MantineProvider>
    {showNav && <Sidebar currentPage={currentPage} />}
    {showNav && <Navbar />}
    <Element name="hero">
        <FadeInSection>
          <HeroLayout setCurrentPage={setCurrentPage} />
        </FadeInSection>
      </Element>
      <Element name="intro">
        <FadeInSection>
        <IntroPage handlePageChange={handlePageChange} />
        </FadeInSection>
      </Element>
      <Element name="vision">
        <FadeInSection>
        <VisionPage handlePageChange={handlePageChange} />
        </FadeInSection>
      </Element>
      <Element name="needsandassets">
        <FadeInSection>
        <NeedsAndAssetsPage handlePageChange={handlePageChange} />
        </FadeInSection>
      </Element>
      <Element name="stakeholderengagement">
        <FadeInSection>
        <StakeholderEngagementPage handlePageChange={handlePageChange} />
        </FadeInSection>
      </Element>
      <Element name="strategies">
        <FadeInSection>
        <StrategiesPage handlePageChange={handlePageChange} />
        </FadeInSection>
      </Element>
      <Element name="conclusion">
        <FadeInSection>
        <ConclusionPage handlePageChange={handlePageChange} />
        </FadeInSection>
      </Element>
    {/* {sectionData.map((section, index) => (
      <Element key={index} name={section.name}>
        <FadeInSection>{section.component}</FadeInSection>
      </Element>
    ))} */}
    </MantineProvider>
  );
};

export default App;
