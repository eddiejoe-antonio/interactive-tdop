// ScrollableComponent.js
import React, { useState, useEffect } from 'react';

const ScrollableComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const titleTop = Math.min(200, -(scrollPosition - window.innerHeight));

  return (
    <div className="scrollable-container relative">
      <div className="title-container fixed top-0 left-1/2 transform -translate-x-1/2 p-4 bg-white z-10" style={{ top: `${titleTop}px` }}>
        <h1 className="text-2xl">Your Title</h1>
      </div>
      <div className="content-container mt-[120vh] p-4">
        {/* Your scrollable content goes here */}
        {Array.from({ length: 200 }, (_, index) => (
          <p key={index}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        ))}
      </div>
    </div>
  );
};

export default ScrollableComponent;
