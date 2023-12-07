import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import CardTerms from '../../components/CardTerms';
import IntroCard from '../../components/IntroCard';

const IntroTwo = () => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <div className='w-full h-full bg-[#FFFDF6] px-4 font-sans'>
        <div className='max-w-[1240px] grid md:grid-cols-12'>
            <div className='flex flex-col col-start-4 col-span-6 justify-center items-center pt-20 md:pb-20'>
                <p className=''>
                There are many factors that will help the state achieve progress on digital opportunity. Each introduces a new concept that can be challenging to understand.
                <br />  
                <br />
                Click on the images to see a definition of each of the key terms and topics in the BDO’s vision for digital opportunity or scroll down to continue.
                </p>
            </div>
        </div>
        <div className='grid grid-cols-12'>
        <div className='flex flex-col col-start-4 col-span-6 justify-center items-center pt-20 md:pb-20'>
          <CardTerms img={IntroCard.Availability.img} altText={IntroCard.Availability.altText} title={IntroCard.Availability.title} description={IntroCard.Availability.description} />
        </div>
        <div className='flex flex-col col-start-4 col-span-6 justify-center items-center pt-20 md:pb-20'>
          <CardTerms img={IntroCard.Affordability.img} altText={IntroCard.Affordability.altText} title={IntroCard.Affordability.title} description={IntroCard.Affordability.description} />
        </div>
        </div>
    </div>
  )
}

export default IntroTwo;
