// App.js
import React, { useState, useEffect } from 'react';
import DotsNav from '../components/DotsNav';
import { Element as ScrollElement, Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import '@mantine/core/styles.css';
import IntroOne from './content/IntroOne';
import IntroTwo from './content/IntroTwo';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar';
import ScrollableTitle from '../components/ScrollableTitle';
import IntroCards from '../components/IntroCards';


const IntroPage = () => {
  const header =
  <ScrollableTitle 
    img={IntroCards.Header.img}
    altText={IntroCards.Header.altText}
    title={IntroCards.Header.title}
  />
  const sections = [header, <IntroOne/>, <IntroTwo />];
  const [activeSection, setActiveSection] = useState(0);

  const handleSectionClick = (index) => {
    setActiveSection(index);
    scroll.scrollTo(`section${index + 1}`, { smooth: true, duration: 500 });
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="app flex">
        {/* <DotsNav
          sections={sections}
          activeSection={activeSection}
          onSectionClick={handleSectionClick}
          activeDotColor="#666"
          regularDotColor="#ececec"
        /> */}
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

export default IntroPage