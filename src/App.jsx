// App.js
import React, { useState, useEffect } from 'react';
import { Element as ScrollElement, Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Navbar from './components/Navbar'
import Section1 from './components/Test/Section1';
import Section2 from './components/Test/Section2';
import Section3 from './components/Test/Section3';
import Section4 from './components/Test/Section4';
import DotsNav from './components/DotsNav';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import PageOneTest from "./components/PageOneTest"
import PageTwoText from "./components/PageTwoTest"
import PageThreeTest from "./components/PageThreeTest";
import HeroLayout from './components/HeroLayout'


const App = () => {
  const sections = [<PageOneTest/>, <PageTwoText />, <PageThreeTest />];
  // const sections = [<Section1 />, <Section2 />, <Section3 />, <Section4 />];
  const [activeSection, setActiveSection] = useState(0);

  const handleSectionClick = (index) => {
    setActiveSection(index);
    scroll.scrollTo(`section${index + 1}`, { smooth: true, duration: 500 });
  };
  

  return (
    <MantineProvider>
      <HeroLayout />
      <Navbar />
      <div className="app flex">
        <DotsNav
          sections={sections}
          activeSection={activeSection}
          onSectionClick={handleSectionClick}
          activeDotColor="#666"
          regularDotColor="#ececec"
        />
        <div className="content flex-1">
          {sections.map((section, index) => (
            <ScrollElement key={index} name={`section${index + 1}`}>
              {section}
            </ScrollElement>
          ))}
        </div>
      </div>
    </MantineProvider>
  );
};


export default App;
