// DotsNav.js
import React, { useEffect, useState } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';

const DotsNav = ({ totalSections, activeSection, onDotClick }) => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    setDots(Array.from({ length: totalSections }, (_, index) => index + 1));
  }, [totalSections]);

  return (
    <div className="dots-nav fixed right-10 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
      {dots.map((dot) => (
        <ScrollLink
          key={dot}
          to={`section${dot}`}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className={`dot mb-4 w-4 h-4 rounded-full cursor-pointer ${
            activeSection === dot - 1 ? 'bg-blue-500' : 'bg-gray-300'
          }`}
          onClick={() => onDotClick(dot - 1)}
        />
      ))}
    </div>
  );
};

export default DotsNav;
