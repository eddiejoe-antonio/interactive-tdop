import React, { useState, useEffect } from 'react';

const ScrollableTitle = ({ img, altText, title }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const initialPosition = window.innerHeight / 4;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-screen" style={{ background: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className='px-[20%] z-10 w-full`'>
        <h1 className="text-white md:text-6xl text-4xl py-40 font-light uppercase tracking-widest">{title}</h1>
      </div>
    </div>
  );
};

export default ScrollableTitle;
