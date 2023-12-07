import TexasStripes from '../../components/TexasStripes';
import 'react-dropdown/style.css';
import { Menu, Button } from '@mantine/core'


const StrategiesOne = () => {
    return ( 
        <div className='w-full h-full bg-[#FFFDF6] px-4 font-sans'>
            <div className='max-w-[1240px] grid md:grid-cols-12'>
                <div className='flex flex-col md:col-start-4 md:col-span-6 justify-center items-center pt-20 md:pb-20'>
                    <h1 className='md:text-6xl sm:text-2xl text-2xl py-6 font-light uppercase tracking-widest'>Strategies</h1>
                    <TexasStripes />
                    <p className='py-12 font-sans'>
                    The TDOP sets the BDO’s vision and goals for digital opportunity in the state, assesses the current state of access and barriers to digital opportunities, outlines how the BDO will collaborate with stakeholders to address challenges, and describes the strategies and actions the BDO will take to realize its vision and goals.  
                    </p>
                    <p className='py-12'>
                    The BDO’s vision for digital opportunity is:
                    <br /><br />
                    <strong>“Improve quality of life and promote economic growth by enabling fast, reliable, and affordable broadband connectivity for all residents and businesses, and by promoting universal broadband adoption and access to digital skills development.”</strong>
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default StrategiesOne;