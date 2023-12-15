import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import CardTerms from '../../components/CardTerms';
import IntroCards from '../../components/IntroCards';
import StrategiesCards from '../../components/StrategiesCards';

const StrategiesTwo = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div className='w-full h-full bg-[#FFFDF6] px-4 font-sans'>
        <div className='grid md:grid-cols-12'>
            <div className='flex flex-col col-start-4 col-span-6 justify-center items-center md:pb-20'>
                <p className=''>
                Click on the images to read about the strategies that will ensure the success of the Texas Digital Opportunity Plan.
                </p>
            </div>
        </div>
        <div className='block md:grid md:grid-cols-12 gap-2'>
                <div className='flex flex-col col-start-4 col-span-3 items-center mb-[5vh]'>
                <CardTerms img={StrategiesCards.Statewide.img} altText={StrategiesCards.Statewide.altText} title={StrategiesCards.Statewide.title} description={StrategiesCards.Statewide.description} />
                </div>
                <div className='flex flex-col col-start-7 col-span-3 items-center'>
                <CardTerms img={StrategiesCards.Promotion.img} altText={StrategiesCards.Promotion.altText} title={StrategiesCards.Promotion.title} description={StrategiesCards.Promotion.description} />
                </div>
            </div>
            <div className='block md:grid md:grid-cols-12 gap-2'>
                <div className='flex flex-col col-start-4 col-span-3 items-center'>
                  <CardTerms img={StrategiesCards.Local.img} altText={StrategiesCards.Local.altText} title={StrategiesCards.Local.title} description={StrategiesCards.Local.description} />
                </div>
                <div className='flex flex-col col-start-7 col-span-3 items-center'>
                  <CardTerms img={StrategiesCards.Living_Plan.img} altText={StrategiesCards.Living_Plan.altText} title={StrategiesCards.Living_Plan.title} description={StrategiesCards.Living_Plan.description} />
                </div>
            </div>
            <div className='grid md:grid-cols-12'>
              <div className='flex flex-col col-start-4 col-span-6 justify-center items-center md:pt-[10vh] md:pb-[40vh]'>
              <p>The BDO’s four strategies will be implemented in collaboration with State agencies, local
              partners, community members, and others from the Texas digital opportunity ecosystem. </p>
              </div>
            </div>
    </div>
  )
}

export default StrategiesTwo;
