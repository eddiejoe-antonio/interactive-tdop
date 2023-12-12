// App.js
import React, { useState, useEffect } from 'react';
import DotsNav from '../components/DotsNav';
import { Element as ScrollElement, Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import VisionOne from './content/VisionOne'
import VisionTwo from './content/VisionTwo';
import ScrollableTitle from '../components/ScrollableTitle';
import VisionCards from '../components/VisionCards';

const VisionPage = () => {
  const header = 
  <ScrollableTitle         
  img={VisionCards.Header.img}
  altText={VisionCards.Header.altText}
  title={VisionCards.Header.title}
  />
  const sections = [header, <VisionOne />, <VisionTwo />];
  const [activeSection, setActiveSection] = useState(0);

  const handleSectionClick = (index) => {
    setActiveSection(index);
    scroll.scrollTo(`section${index + 1}`, { smooth: true, duration: 500 });
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="app flex">
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