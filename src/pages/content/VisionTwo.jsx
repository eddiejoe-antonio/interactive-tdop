import TexasStripes from '../../components/TexasStripes';
import CardTerms from '../../components/CardTerms';
import IntroCards from '../../components/IntroCard';
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
                <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center pt-20 md:pb-20'>
                    <p className='py-12'>
                    To achieve this vision, the BDO is investing in digital opportunity to advance the following state priority outcome areas: 
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-12'>
                <div className='flex flex-col col-start-4 col-span-6 justify-center items-center pt-20 md:pb-20'>
                <CardTerms img={IntroCards.Availability.img} altText={IntroCards.Availability.altText} title={IntroCards.Availability.title} description={IntroCards.Availability.description} />
                </div>
                <div className='flex flex-col col-start-4 col-span-6 justify-center items-center pt-20 md:pb-20'>
                <CardTerms img={IntroCards.Affordability.img} altText={IntroCards.Affordability.altText} title={IntroCards.Affordability.title} description={IntroCards.Affordability.description} />
                </div>
            </div>
        </div>
     );
}
 
export default VisionTwo;