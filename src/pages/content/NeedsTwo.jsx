import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import CollapsibleCard from '../../components/CollapsibleCard';
import MapContainer from '../../components/MapContainer';
import SingleStackedBarChart from '../../components/SingleStackedBarChart';

const NeedsTwo = () => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <div className='w-full h-full bg-[#FFFDF6] px-4 font-sans'>
        <div className='flex flex-col items-center mb-[5vh] md:col-start-7 md:col-span-3 lg:col-start-8 lg:col-span-2'>
        <div className='w-[70vw] mx-auto mb-40'>
            <CollapsibleCard
                goalNumber="1"
                taskNumber="1"
                color="#333333"
                goalTitle="Increase the percentage of Texans with reliable broadband subscriptions available in their homes"
                description="Today, 32% of Texan households do not subscribe to broadband internet. 

                Certain regions of Texas have higher rates of subscription, while others are lower. At right, the map visualizes subscription rates for each of the twelve regions of the state."
                leftPanelContent={<SingleStackedBarChart />}
                rightPanelContent={<MapContainer />}
            />
            <CollapsibleCard
                goalNumber="1"
                taskNumber="2"
                color="#002768"
                goalTitle="Decrease the percentage of individuals who cite cost as a barrier to home internet service"
                description="Today, 32% of Texan households do not subscribe to broadband internet. 

                Certain regions of Texas have higher rates of subscription, while others are lower. At right, the map visualizes subscription rates for each of the twelve regions of the state."
                leftPanelContent={<SingleStackedBarChart />}
                rightPanelContent={<MapContainer />}
            />
            </div>
        </div>
    </div>
  )
}

export default NeedsTwo;
