import React from 'react'
import heroImg from '../assets/hero.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[100%] md:w-[500p] mx-auto my-4' src={heroImg} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold uppercase'>Data Analytics Dashboard</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nihil, qui quisquam reprehenderit, maxime dicta officiis saepe provident, aperiam incidunt id quis dolor delectus deserunt accusamus exercitationem ipsum facere. Dolorem suscipit fugit temporibus vero aperiam pariatur repudiandae libero voluptatum tenetur!
                </p>
                <button className=' bg-black text-[#00df9a] w-[200px] rounded-md font-md my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>

        </div>
      
    </div>
  )
}

export default Analytics
