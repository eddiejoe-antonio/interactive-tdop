import React from 'react';
import { Link } from 'react-scroll';

const DotsNav = ({ sections, activeSection, onSectionClick, activeDotColor, regularDotColor }) => {
  return (
    <div className="z-10 hidden md:flex md:fixed right-10 top-1/2 transform -translate-y-1/2 p-4 flex flex-col items-end">
      {sections.map((section, index) => (
        <Link
          key={index}
          to={`section${index + 1}`}
          smooth={true}
          duration={500}
          className="dot w-3 h-3 rounded-full mb-4 cursor-pointer"
          style={{ backgroundColor: index === activeSection ? activeDotColor : regularDotColor }}
          onClick={() => onSectionClick(index)}
        />
      ))}
    </div>
  );
};

export default DotsNav;
