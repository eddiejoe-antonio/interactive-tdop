// ScrollableComponent.js
import React, { useState, useEffect } from 'react';

const ScrollableTitle = ({img, altText, title}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const initialPosition = window.innerHeight/4

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setIsScrolled(window.scrollY >= initialPosition*2.5);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const titleTop = Math.round(Math.min(initialPosition, -(scrollPosition - (window.innerHeight*1.2))));

  return (
    <div className="relative w-full h-screen" style={{
      background: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <div className={`fixed top-0 left-1/2 transform -translate-x-1/2 p-4 z-10 ${isScrolled ? 'text-black' : 'text-white'}`} style={{ top: `${titleTop}px` }}>
        <h1 className="md:text-6xl text-4xl py-6 font-light uppercase tracking-widest">{title}</h1>
      </div>
    </div>
  );
};

export default ScrollableTitle;
