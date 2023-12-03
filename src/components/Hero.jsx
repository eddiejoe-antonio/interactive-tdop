import React from 'react'

const Hero = () => {
  return (
    <div className='text-[#111] max-w-[800px] mt-[-20px] w-full h-screen mx-auto text-center flex flex-col justify-center z-0'>
    <p className='text-[#00df9a] uppercase font-bold'>Hero</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-2'>Grow with Data.</h1>
    <div className='flex justify-center items-center'>
        <p className='md:text-5xl sm:4xl text-xl font-bold py-10'>Fast flexible styling</p>
    </div>
    <p className='md:text-2xl text-xl font-bold text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint officiis quisquam ea, natus itaque tempora provident quidem fugit eaque laudantium.</p>
    <button className='bg-[#00df9a] w-[200px] rounded-md font-md my-6 mx-auto py-3 text-black'>Get Started</button>
    </div>
  )
}

export default Hero
