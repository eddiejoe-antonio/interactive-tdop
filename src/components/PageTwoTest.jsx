import React from 'react'
import heroImg from '../assets/hero.jpg'

const PageTwoText = () => {
  return (
    <div className='w-full h-screen bg-[#FFFDF6] px-4 font-sans'>
        <div className='max-w-[1240px] grid md:grid-cols-12 grid-rows-3 md:grid-rows-2'>
            <div className='flex flex-col col-start-4 col-span-6 justify-center items-center py-20 md:py-40'>
                <p className=''>
                There are many factors that will help the state achieve progress on digital opportunity. Each introduces a new concept that can be challenging to understand.
                <br />  
                <br />
                Click on the images to see a definition of each of the key terms and topics in the BDO’s vision for digital opportunity or scroll down to continue.
                </p>
            </div>
        </div>
    </div>
  )
}

export default PageTwoText;
