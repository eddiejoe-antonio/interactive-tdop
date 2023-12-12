import TexasStripes from '../../components/TexasStripes';
import 'react-dropdown/style.css';
import { Menu, Button } from '@mantine/core'


const StrategiesOne = () => {
    return ( 
        <div className='w-full h-full bg-[#FFFDF6] px-4 font-sans'>
            <div className='max-w-[1240px] grid md:grid-cols-12'>
                <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center pt-[10vh]'>
                    <TexasStripes />
                    <p className='py-12 font-sans'>
                    The BDO will advance the following four primary strategies to address these needs and other barriers identified in this plan and to realize its goals and overall vision.
                  </p>
                    <p className='py-12'>
                    The BDO’s four strategies will be implemented in collaboration with State agencies, local partners, community members, and others from the Texas digital opportunity ecosystem.  
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default StrategiesOne;