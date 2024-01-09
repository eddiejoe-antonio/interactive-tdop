// import { useDisclosure } from '@mantine/hooks';
import CollapsibleCard from '@/components/CollapsibleCard';
import SingleStackedBarChart from '@/components/SingleStackedBarChart';
import MapContainer from '@/components/MapContainer';

const NeedsTwo = () => {
  // const [opened, { toggle }] = useDisclosure(false);
  return (
    <div className='w-full h-full bg-[#FFFDF6] px-4 font-sans'>
      <div className='grid md:grid-cols-12'>
        <div className='flex flex-col md:col-start-3 md:col-span-9 justify-center items-center'>
          <div className='mx-auto mb-20'>
            <h1 className='md:text-6xl text-2xl uppercase my-5 font-montserrat'>Goal No. 1</h1>
            <p>
              All Texans have access to reliable, affordable broadband internet service at home.
              Click below to learn more!
            </p>
            <hr className='my-5' />
            <CollapsibleCard
              goalNumber='1'
              taskNumber='1'
              color='#333333'
              goalTitle='Increase the percentage of Texans with reliable broadband subscriptions available in their homes'
              description={
                <div>
                  <p className='mb-2'>
                    Today,{' '}
                    <strong>32% of Texan households do not subscribe to broadband internet.</strong>
                  </p>{' '}
                  <p>
                    Certain regions of Texas have higher rates of subscription, while others are
                    lower. At right, the map visualizes subscription rates for each of the twelve
                    regions of the state.
                  </p>
                </div>
              }
              targetText={
                <p>
                  The State of Texas is targeting that <strong>80% of Texans</strong> subscribe to
                  reliable broadband in their homes by 2030.
                </p>
              }
              leftPanelContent={<SingleStackedBarChart width={200} height={20} value={68} />}
              rightPanelContent={<MapContainer />}
              strategy1='Partner with and fund statewide organizations'
              strategy2='Fund local partners'
              strategy3='Promote internet adoption'
            />
            <CollapsibleCard
              goalNumber='1'
              taskNumber='2'
              color='#002768'
              goalTitle='Decrease the percentage of individuals who cite cost as a barrier to home internet service'
              description='Today, 32% of Texan households do not subscribe to broadband internet. 

                Certain regions of Texas have higher rates of subscription, while others are lower. At right, the map visualizes subscription rates for each of the twelve regions of the state.'
              leftPanelContent={<SingleStackedBarChart width={200} height={20} value={68} />}
              rightPanelContent={<MapContainer />}
            />
            <CollapsibleCard
              goalNumber='1'
              taskNumber='3'
              color='#BE0B31'
              goalTitle='Decrease the percentage of individuals who cite cost as a barrier to home internet service'
              description='Today, 32% of Texan households do not subscribe to broadband internet. 

                Certain regions of Texas have higher rates of subscription, while others are lower. At right, the map visualizes subscription rates for each of the twelve regions of the state.'
              leftPanelContent={<SingleStackedBarChart />}
              rightPanelContent={<MapContainer />}
            />
          </div>
        </div>
        <div className='flex flex-col md:col-start-3 md:col-span-9 justify-center items-center'>
          <div className='mx-auto mb-20'>
            <h1 className='md:text-6xl text-2xl uppercase my-5 font-montserrat'>Goal No. 2</h1>
            <p className='font-sans'>
              All Texans have access to reliable, affordable broadband internet service at home.
              Click below to learn more!
            </p>
            <hr className='my-5' />
            <CollapsibleCard
              goalNumber='1'
              taskNumber='1'
              color='#333333'
              goalTitle='Increase the percentage of Texans with reliable broadband subscriptions available in their homes'
              description={
                <div>
                  <p className='mb-2'>
                    Today,{' '}
                    <strong>32% of Texan households do not subscribe to broadband internet.</strong>
                  </p>{' '}
                  <p>
                    Certain regions of Texas have higher rates of subscription, while others are
                    lower. At right, the map visualizes subscription rates for each of the twelve
                    regions of the state.
                  </p>
                </div>
              }
              targetText={
                <p>
                  The State of Texas is targeting that <strong>80% of Texans</strong> subscribe to
                  reliable broadband in their homes by 2030.
                </p>
              }
              leftPanelContent={<SingleStackedBarChart width={200} height={20} value={68} />}
              rightPanelContent={<MapContainer />}
              strategy1='Partner with and fund statewide organizations'
              strategy2='Fund local partners'
              strategy3='Promote internet adoption'
            />
            <CollapsibleCard
              goalNumber='1'
              taskNumber='2'
              color='#002768'
              goalTitle='Decrease the percentage of individuals who cite cost as a barrier to home internet service'
              description='Today, 32% of Texan households do not subscribe to broadband internet. 

                  Certain regions of Texas have higher rates of subscription, while others are lower. At right, the map visualizes subscription rates for each of the twelve regions of the state.'
              leftPanelContent={<SingleStackedBarChart />}
              rightPanelContent={<MapContainer />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedsTwo;
