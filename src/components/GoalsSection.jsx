import React, { useState, useEffect } from 'react';
import KPIContainer from './KPIContainer';
import NeedsCards from './NeedsCards'

const GoalsSection = ({ img, description, title }) => {
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
    <div className="relative w-screen h-screen" style={{ background: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className='px-[20%] z-10 w-full'>
        <h1 className="text-white md:text-6xl text-4xl pt-[20vh] pb-10 font-light uppercase tracking-widest">{title}</h1>
        <p className='text-white font-sans'>{description}</p>
        <div className='mt-[10vh] block: md:flex md:justify-between'>
          <KPIContainer goal={NeedsCards.KPI1_1.goal} kpi={NeedsCards.KPI1_1.kpi} description={NeedsCards.KPI1_1.text} className='flex-1'/>
          <KPIContainer goal={NeedsCards.KPI1_1.goal} kpi={NeedsCards.KPI1_1.kpi} description={NeedsCards.KPI1_1.text} className='flex-1'/>
          <KPIContainer goal={NeedsCards.KPI1_1.goal} kpi={NeedsCards.KPI1_1.kpi} description={NeedsCards.KPI1_1.text} className='flex-1'/>
        </div>
      </div>
    </div>
  );
};

export default GoalsSection;
