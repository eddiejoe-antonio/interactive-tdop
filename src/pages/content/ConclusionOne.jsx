import TexasStripes from '../../components/TexasStripes';
import 'react-dropdown/style.css';
import { Menu, Button } from '@mantine/core'
import ButtonDark from '../../components/ButtonDark';
import ButtonLight from '../../components/ButtonLight';


const ConclusionOne = () => {
    return ( 
        <div className='w-full h-screen px-4 font-sans'>
            <div className='max-w-[1240px] grid md:grid-cols-12'>
                <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center pt-[40vh]'>
                    <TexasStripes />
                    <p className='py-12 font-sans'>
                    The Texas Digital Opportunity Plan presents this set of strategies in response to specific digital needs statewide.
                   </p>
                    <p className='py-12'>
                    The strategies this plan proposes will ensure that all Texans are able to fully participate in our 21st century economy and social and civil society.     
                    </p>
                </div>
                <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center pt-20 md:pb-20'>
                    <p className='py-12 font-sans'>
                    However, the Texas Digital Opportunity Plan is intended to be a living document. We welcome your comments at this link, your feedback at our email address, and your continued participation in the expansion of digital opportunity in Texas through public events or other forums.
                    </p>
                    <p className='py-12 font-sans'>
                    If you want to dive deeper into specific issues, specific counties or regions, or anything else, click here to review the BDO’s Digital Opportunity Dashboards.      
                    </p>
                    <div className='flex justify-between py-8'> 
                        <ButtonDark text='Interactive Plan'></ButtonDark>
                        <ButtonLight text='Data Dashboards'></ButtonLight>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ConclusionOne;