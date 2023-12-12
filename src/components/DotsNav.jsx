// DotsNav.js
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Dot = ({ active, onClick }) => (
  <div
    onClick={onClick}
    style={{
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: active ? '#666' : '#ececec',
      margin: '5px',
      cursor: 'pointer',
    }}
  />
);

const DotsNav = ({ totalSections, onDotClick }) => {
  const [activeDot, setActiveDot] = useState(0);

  const handleDotClick = (index) => {
    onDotClick(index);
    setActiveDot(index);
  };

  const dots = [...Array(totalSections).keys()].map((index) => (
    <Dot key={index} active={activeDot === index} onClick={() => handleDotClick(index)} />
  ));

  return <div style={{ position: 'fixed', top: '50%', right: '50px', transform: 'translateY(-50%)' }}>{dots}</div>;
};

export default DotsNav;


// // DotsNav.js
// import React, { useEffect, useState } from 'react';
// import { Link as ScrollLink, scroller } from 'react-scroll';

// const DotsNav = ({ totalSections, activeSection, onDotClick }) => {
//   const [dots, setDots] = useState([]);

//   useEffect(() => {
//     setDots(Array.from({ length: totalSections }, (_, index) => index + 1));
//   }, [totalSections]);

//   return (
//     <div className="dots-nav fixed right-10 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
//       {dots.map((dot) => (
//         <ScrollLink
//           key={dot}
//           to={`section${dot}`}
//           spy={true}
//           smooth={true}
//           offset={0}
//           duration={500}
//           className={`dot mb-4 w-4 h-4 rounded-full cursor-pointer ${
//             activeSection === dot ? 'bg-blue-500' : 'bg-gray-300'
//           }`}
//           onClick={() => onDotClick(dot)}
//         />

//       ))}
//     </div>
//   );
// };

// export default DotsNav;