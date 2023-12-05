import React from 'react'
import heroImg from '../assets/hero.jpg'
import { Button } from '@mantine/core';
import CarouselHero from './CarouselHero';
import ScrollArrow from './ScrollArrow';
import ButtonApp from './ButtonLight';
import ButtonLight from './ButtonLight';
import ButtonDark from './ButtonDark';

const HeroLayout = () => {
  return (
    <div className='w-screen h-screen bg-[#FFFDF6] overflow-x-hidden'>
        <div className='grid md:grid-cols-12'>
            <div className='flex flex-col justify-center content-center p-4 md:p-0 md:col-span-5 md:col-start-2'>
                <p className='text-[#111] text-xs uppercase tracking-widest'>Texas Broadband Development Office</p>
                <h1 className='md:text-6xl sm:text-2xl text-2xl font-semibold py-6 uppercase tracking-widest'>The Texas Digital Opportunity Plan</h1>
                <p className='font-sans'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nihil, qui quisquam reprehenderit, maxime dicta officiis saepe provident, aperiam incidunt id quis dolor delectus deserunt accusamus exercitationem ipsum.
                </p>
                <div className='flex justify-between py-8'> 
                    <ButtonDark text='Interactive Plan'></ButtonDark>
                    <ButtonLight text='Data Dashboards'></ButtonLight>
                </div>
                <div className='mx-auto'>
                    <p className='font-sans'>Scroll to explore the Texas Digital Opportunity Plan</p>
                    <div className='flex justify-center py-8'>
                        <ScrollArrow />
                    </div>
                </div>
            </div>
            <div className='flex md:col-start-8 md:col-span-5 object-cover'>
                <CarouselHero className='object-contain' />
            </div>
            {/* <img className='flex md:col-start-8 h-screen md:col-span-5 object-cover' src={heroImg} alt="/" /> */}
        </div>
      
    </div>
  )
}

export default HeroLayout;
