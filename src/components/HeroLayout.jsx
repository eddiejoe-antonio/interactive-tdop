import React from 'react'
import heroImg from '../assets/hero.jpg'
import { Button } from '@mantine/core';

const HeroLayout = () => {
  return (
    <div className='w-screen h-screen bg-[#FFFDF6]'>
        <div className='grid md:grid-cols-12'>
            <div className='flex flex-col justify-center p-4 md:p-0 md:col-span-5 md:col-start-2 mt-10 md:mt-0'>
                <p className='text-[#111] text-xs uppercase tracking-widest'>Texas Broadband Development Office</p>
                <h1 className='md:text-6xl sm:text-3xl text-2xl font-semibold py-6 uppercase tracking-widest'>The Texas Digital Opportunity Plan</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nihil, qui quisquam reprehenderit, maxime dicta officiis saepe provident, aperiam incidunt id quis dolor delectus deserunt accusamus exercitationem ipsum facere. Dolorem suscipit fugit temporibus vero aperiam pariatur repudiandae libero
                </p>
                <div> 
                    <Button color="dark" radius={0} className='uppercase'>Interactive Plan</Button>
                    <Button color="rgba(255,253,246 )" radius={0} className='uppercase ml-10 border-2 border-black' styles={{ label: { color: 'black' } }}>Data Dashboards</Button>
                </div>
            </div>
            <img className='flex md:col-start-8 h-screen md:col-span-5 object-cover' src={heroImg} alt="/" />
        </div>
      
    </div>
  )
}

export default HeroLayout;
