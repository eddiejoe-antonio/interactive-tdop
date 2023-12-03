import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips on digital opportunity in Texas?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nemo.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="text" placeholder='Enter Email'/>
                    <button className=' bg-[#00df9a] text-black w-[200px] rounded-md font-md my-6 ml-4 py-3'>Notify Me</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Newsletter
