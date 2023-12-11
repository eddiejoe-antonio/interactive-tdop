// App.js
import React, { useState, useEffect } from 'react';
import DotsNav from '../components/DotsNav';
import { Element as ScrollElement, Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar';
import StrategiesOne from './content/StrategiesOne';
import StrategiesTwo from './content/StrategiesTwo';
import StrategiesCards from '../components/StrategiesCards';
import ScrollableTitle from '../components/ScrollableTitle';


const StrategiesPage = () => {
  const header =
  <ScrollableTitle 
  img={StrategiesCards.Header.img}
  altText={StrategiesCards.Header.altText}
  title={StrategiesCards.Header.title}
  />
  const sections = [header, <StrategiesOne />, <StrategiesTwo />];
  const [activeSection, setActiveSection] = useState(0);

  const handleSectionClick = (index) => {
    setActiveSection(index);
    scroll.scrollTo(`section${index + 1}`, { smooth: true, duration: 500 });
  };

  return (
    <>
      <Navbar />
      <Sidebar />
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

export default StrategiesPage