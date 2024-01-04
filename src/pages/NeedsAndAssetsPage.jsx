// App.js
import React, { useState, useEffect } from 'react';
import DotsNav from '../components/DotsNav';
import { Element as ScrollElement, Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import '@mantine/core/styles.css';
import NeedsOne from './content/NeedsOne';
import NeedsCards from '../components/NeedsCards';
import ScrollableTitle from '../components/ScrollableTitle';
import ScrollytellingComponent from '../components/ScrollytellingComponent';
import GoalsSection from '../components/GoalsSection';
import NeedsTwo from './content/NeedsTwo';


const NeedsAndAssetsPage = () => {
  const Header = () =>(
  <ScrollableTitle 
  img={NeedsCards.Header.img}
  altText={NeedsCards.Header.altText}
  title={NeedsCards.Header.title}
  />)

  const Goals1 = () => (
  <GoalsSection   
  img={NeedsCards.Goal1.img}
  altText={NeedsCards.Goal1.altText}
  title={NeedsCards.Goal1.title} 
  description={NeedsCards.Goal1.description}
  />
  )

  const sections = [<Header />, <NeedsOne />, <Goals1 />, <ScrollytellingComponent />, <Goals1 />];
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

export default NeedsAndAssetsPage