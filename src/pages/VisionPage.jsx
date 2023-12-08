// App.js
import React, { useState, useEffect } from 'react';
import DotsNav from '../components/DotsNav';
import { Element as ScrollElement, Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar';
import VisionOne from './content/VisionOne'
import VisionTwo from './content/VisionTwo';
import ScrollableTitle from '../components/ScrollableTitle';
import IntroCards from '../components/IntroCard';

const VisionPage = () => {
  const header = <ScrollableTitle         
  img={IntroCards.Test.img}
  altText={IntroCards.Test.altText}
  title={IntroCards.Test.title}
  />
  const sections = [header, <VisionOne />, <VisionTwo />];
  const [activeSection, setActiveSection] = useState(0);

  const handleSectionClick = (index) => {
    setActiveSection(index);
    scroll.scrollTo(`section${index + 1}`, { smooth: true, duration: 500 });
  };

  return (
    <>
      <Navbar />
      <Sidebar className='text-white'/>
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
    </>
  )
};

export default VisionPage