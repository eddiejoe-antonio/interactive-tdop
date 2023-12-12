import React from 'react';
import { scroller } from 'react-scroll';

const VerticalDotsNav = ({ sectionData, currentSection, onDotClick }) => {
  return (
    <div className="vertical-dots-nav">
      {sectionData.map((section, index) => (
        <div
          key={index}
          className={`dot ${currentSection === index ? 'active' : ''}`}
          onClick={() => onDotClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default VerticalDotsNav;
