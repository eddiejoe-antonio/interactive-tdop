import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import CardTerms from '../../components/CardTerms';
import IntroCards from '../../components/IntroCards';
import VisionCards from '../../components/VisionCards';

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
        <div className='flex md:grid md:grid-cols-12 gap-2'>
                <div className='flex flex-col col-start-4 col-span-2 items-center mb-[5vh]'>
                <CardTerms img={IntroCards.Broadband.img} altText={IntroCards.Broadband.altText} title={IntroCards.Broadband.title} description={IntroCards.Broadband.description} />
                </div>
                <div className='flex flex-col col-start-6 col-span-2 items-center'>
                <CardTerms img={IntroCards.Affordability.img} altText={IntroCards.Affordability.altText} title={IntroCards.Affordability.title} description={IntroCards.Affordability.description} />
                </div>
                <div className='flex flex-col col-start-8 col-span-2 items-center'>
                <CardTerms img={VisionCards.Accessibility.img} altText={VisionCards.Accessibility.altText} title={VisionCards.Accessibility.title} description={VisionCards.Accessibility.description} />
                </div>
            </div>
            <div className='flex md:grid md:grid-cols-12 gap-2 mb-[40vh]'>
            <div className='flex flex-col col-start-4 col-span-2 items-center pt-0 md:pb-0'>
                <CardTerms img={VisionCards.Civic_Engagement.img} altText={VisionCards.Civic_Engagement.altText} title={VisionCards.Civic_Engagement.title} description={VisionCards.Civic_Engagement.description} />
                </div>
                <div className='flex flex-col col-start-6 col-span-2 items-center pt-0 md:pb-0'>
                <CardTerms img={VisionCards.Workforce.img} altText={VisionCards.Workforce.altText} title={VisionCards.Workforce.title} description={VisionCards.Workforce.description} />
                </div>
                <div className='flex flex-col col-start-8 col-span-2 items-center pt-0 md:pb-0'>
                <CardTerms img={VisionCards.Health.img} altText={VisionCards.Health.altText} title={VisionCards.Health.title} description={VisionCards.Health.description} />
                </div>
            </div>
    </div>
  )
}

export default IntroTwo;
