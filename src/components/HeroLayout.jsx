import React from 'react';
import CarouselHero from './CarouselHero';
import ScrollArrow from './ScrollArrow';
import ButtonLight from './ButtonLight';
import ButtonDark from './ButtonDark';
import { Link, animateScroll as scroll } from 'react-scroll';

const HeroLayout = () => {
  const scrollToNextSection = () => {
    // Use the 'react-scroll' library to smoothly scroll to the next section
    scroll.scrollMore(100, { smooth: 'easeInOutQuart' });
  };

  return (
    <div className='z-50 w-full h-screen bg-[#FFFDF6] overflow-x-hidden'>
      <div className='block md:grid md:grid-cols-12'>
        <div className='flex flex-col justify-center content-center p-4 md:p-0 md:col-span-5 md:col-start-2'>
          <p className='text-[#111] text-xs uppercase tracking-widest'>Texas Broadband Development Office</p>
          <h1 className='md:text-6xl sm:text-2xl text-2xl font-semibold py-6 uppercase tracking-widest'>The Texas Digital Opportunity Plan</h1>
          <p className='font-sans'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nihil, qui quisquam reprehenderit, maxime dicta officiis saepe provident, aperiam incidunt id quis dolor delectus deserunt accusamus exercitationem ipsum.
          </p>
          <div className='flex justify-between py-8 w-full font-sans'> 
            <ButtonDark text='Interactive Plan' className='flex-1'></ButtonDark>
            <ButtonLight text='Data Dashboards' className='flex-1'></ButtonLight>
          </div>
          <div className='mx-auto justify-center content-center text-center'>
            <p className='font-sans'>Click to explore the Texas Digital Opportunity Plan</p>
            <div className='flex justify-center py-8'>
              <Link to='intro' smooth={true} duration={800}>
                <ScrollArrow onClick={scrollToNextSection} />
              </Link>
            </div>
          </div>
        </div>
        <div className='flex md:col-start-8 md:col-span-5 object-cover'>
          <CarouselHero className='object-contain' />
        </div>
      </div>
    </div>
  );
};

export default HeroLayout;
