// App.js
import React, { useState, useEffect } from 'react';
import DotsNav from '../components/DotsNav';
import { Element as ScrollElement, Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import '@mantine/core/styles.css';
import NeedsOne from './content/NeedsOne';
import NeedsCards from '../components/NeedsCards';
import ScrollableTitle from '../components/ScrollableTitle';
import NeedsTwo from './content/NeedsTwo';
import TestScroll from './TestScroll';
import Scrollytelling from './Scrollytelling';
import ScrollytellingComponent from './ScrollytellingComponent';


const VisionPage = () => {
  const header =
  <ScrollableTitle 
  img={NeedsCards.Header.img}
  altText={NeedsCards.Header.altText}
  title={NeedsCards.Header.title}
  />
  const sections = [header, <NeedsOne />, <NeedsTwo />, <ScrollytellingComponent />];
  const [activeSection, setActiveSection] = useState(0);

  const handleSectionClick = (index) => {
    setActiveSection(index);
    scroll.scrollTo(`section${index + 1}`, { smooth: true, duration: 500 });
  };

  return (
    <>
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