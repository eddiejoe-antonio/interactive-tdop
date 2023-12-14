// IntroPage.js
import React, { useState } from 'react';
import DotsNav from '../components/DotsNav';
import { Element as ScrollElement, animateScroll as scroll } from 'react-scroll';
import IntroOne from './content/IntroOne';
import IntroTwo from './content/IntroTwo';
import ScrollableTitle from '../components/ScrollableTitle';
import IntroCards from '../components/IntroCards';

const IntroPage = () => {
  const header = (
    <ScrollableTitle
      img={IntroCards.Header.img}
      altText={IntroCards.Header.altText}
      title={IntroCards.Header.title}
    />
  );
  const sections = [<IntroOne />, <IntroTwo />];
  const [activeSection, setActiveSection] = useState(0);

  const handleSectionClick = (index) => {
    setActiveSection(index);
    scroll.scrollTo(`section${index + 1}`, { smooth: true, duration: 500 });
  };

  return (
    <>
      <div className="app flex">
      <DotsNav sections={sections} activeSection={activeSection} onSectionClick={handleSectionClick} />
        <div className="content flex-1">
          {sections.map((section, index) => (
            <ScrollElement key={index} name={`section${index + 1}`}>
              {section}
            </ScrollElement>
          ))}
        </div>
      </div>
    </>
  );
};

export default IntroPage;
