import TexasStripes from '../../components/TexasStripes';
import CardTerms from '../../components/CardTerms';
import VisionCards from '../../components/VisionCards'
import 'react-dropdown/style.css';
import { Menu, Button } from '@mantine/core'


const VisionTwo = () => {
    const options = [
        'one', 'two', 'three'
      ];
      const defaultOption = options[0];
      
    return ( 
        <div className='w-full h-full bg-[#FFFDF6] px-4 font-sans'>
            <div className='max-w-[1240px] grid md:grid-cols-12'>
                <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center pt-20 md:pb-20 gap-2'>
                    <p className='py-12'>
                    To achieve this vision, the BDO is investing in digital opportunity to advance the following state priority outcome areas: 
                    </p>
                </div>
            </div>
            <div className='flex md:grid md:grid-cols-12 gap-2'>
                <div className='flex flex-col col-start-4 col-span-2 items-center mb-[5vh]'>
                <CardTerms img={VisionCards.Business.img} altText={VisionCards.Business.altText} title={VisionCards.Business.title} description={VisionCards.Business.description} />
                </div>
                <div className='flex flex-col col-start-6 col-span-2 items-center'>
                <CardTerms img={VisionCards.Education.img} altText={VisionCards.Education.altText} title={VisionCards.Education.title} description={VisionCards.Education.description} />
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
     );
}
 
export default VisionTwo;