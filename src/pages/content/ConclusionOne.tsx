import ScrollytellingWithFixedBackground from '@/components/ScrollHeader';
import 'react-dropdown/style.css';

import TexasStripes from '@/components/TexasStripes';
import ButtonDark from '@/components/ButtonDark';
import ButtonLight from '@/components/ButtonLight';
const steps = [
  <div>
    {/* <h1 className='uppercase py-2'>Introduction</h1> */}
    <p>
      The Texas Digital Opportunity Plan offers strategies to help with digital needs across the
      state,{' '}
      <strong>
        helping all Texans have access to the same tools and information needed to thrive in today's
        society.
      </strong>
    </p>
  </div>,
  <div>
    <p>
      However, the Texas Digital Opportunity Plan is intended to be{' '}
      <strong>a living document.</strong>
    </p>
  </div>,
  <div>
    <p>
      We welcome your comments at{' '}
      <strong>
        <a href='https://infinite-peak-70034.herokuapp.com/'>this link</a>
      </strong>
      , your feedback at our email address, and your continued participation in the expansion of
      digital opportunity in Texas through public events or other forums.
    </p>
  </div>,
  <div>
    <p> Click below to dive deeper into the state of digital opportunity in Texas.</p>
  </div>,
];

const ConclusionOne = () => {
  return (
    <div>
      <ScrollytellingWithFixedBackground
        steps={steps}
        id='unique-id-2'
        backgroundImagePath='Needs.jpg'
      />
      <div className='bg-[#FFFDF6] w-full h-full px-4 font-sans'>
        <div className='grid md:grid-cols-12 font-sans'>
          {/* <div className='font-sans flex flex-col md:col-start-4 md:col-span-6 justify-center pt-[10vh]'>
            <TexasStripes />
            <p className='py-12'>
              The Texas Digital Opportunity Plan offers strategies to help with digital needs across
              the state, helping all Texans have access to the same tools and information needed to
              thrive in today's society.
            </p>
          </div> */}
          <div className='flex flex-col md:col-start-4 md:col-span-6'>
            <div className='flex justify-between py-[10vh] w-full'>
              <ButtonDark text='Interactive Plan' className='flex-1'></ButtonDark>
              <ButtonLight text='Data Dashboards' className='flex-1'></ButtonLight>
            </div>
          </div>
          <div className='flex flex-col md:col-start-0 md:col-span-12 bg-[#ececec]'>
            <p className='py-12 mx-auto font-sans'>
              © 2024 Texas Broadband Office
              <br />
              All rights reserved
              <br />
              Created by the Texas Broadband Office in partnership with HR&A Advisors.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConclusionOne;
