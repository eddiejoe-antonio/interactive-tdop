// DotsNav.js

import React from 'react';
import { Link } from 'react-scroll';

const DotsNav = ({ sections, activeSection, onSectionClick, activeDotColor, regularDotColor }) => {
  if (!sections || sections.length === 0) {
    return null; // Render nothing if there are no sections
  }

  return (
    <div className="z-10 hidden md:flex md:fixed right-10 top-1/2 transform -translate-y-1/2 p-4 flex-col items-end">
      {sections.map((_, index) => (
        <Link
          key={index}
          to={`section${index + 1}`}
          isActive={index === activeSection}
          smooth={true}
          duration={500}
          className={`dot w-3 h-3 rounded-full mb-4 cursor-pointer ${index === activeSection ? `bg-${activeDotColor}` : `bg-${regularDotColor}`}`}
          style={{ backgroundColor: index === activeSection ? activeDotColor : regularDotColor }}
          onClick={() => onSectionClick(index)}
        />
      ))}
    </div>
  );
};

export default DotsNav;



// import React from 'react';
// import { Link } from 'react-scroll';

// const DotsNav = ({ sections, activeSection, isActive, onSectionClick, activeDotColor, regularDotColor }) => {
  
//   return (
//     <div className="z-10 hidden md:flex md:fixed right-10 top-1/2 transform -translate-y-1/2 p-4 flex-col items-end">
//       {sections.map((section, index) => (
//         <Link
//           key={index}
//           to={`section${index + 1}`}
//           isActive={section = index}
//           smooth={true}
//           duration={500}
//           className={`dot w-3 h-3 rounded-full mb-4 cursor-pointer ${isActive ? `bg-${activeDotColor}` : `bg-${regularDotColor}`}`}
//           style={{ backgroundColor: index === activeSection ? activeDotColor : regularDotColor }}
//           onClick={() => onSectionClick(index)}
//         />
//       ))}
//     </div>
//   );
// };

// export default DotsNav;
