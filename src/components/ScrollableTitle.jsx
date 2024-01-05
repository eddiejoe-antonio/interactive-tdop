import React, { useRef, useEffect, useContext } from 'react';
import { ScrollableTitleContext } from './ScrollableTitleContext'; // This context will be created

const ScrollableTitle = ({ img, altText, title }) => {
  const ref = useRef();
  const { refs, addScrollableTitleRef } = useContext(ScrollableTitleContext);

  useEffect(() => {
    // Add ref only if it's not already in the context
    if (ref.current && !refs.includes(ref)) {
      addScrollableTitleRef(ref);
    }
  }, []); // Empty dependency array to run only once


  return (
    <div ref={ref} className="relative w-screen h-screen" style={{ background: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <h1 className="px-[20%] z-10 text-white md:text-6xl text-2xl py-40 font-light uppercase tracking-widest">{title}</h1>
    </div>
  );
};

export default ScrollableTitle;
