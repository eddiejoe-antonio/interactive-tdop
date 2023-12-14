import React, { useState, useEffect } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import NeedsOne from './content/NeedsOne';
import VisionTwo from './content/VisionTwo';
import VisionOne from './content/VisionOne';
import one from '../assets/1.jpg';

const CustomComponent1 = () => (
  <div>
    <h2>One Test</h2>
    <p>Some additional content...</p>
  </div>
);

const CustomComponent2 = () => (
  <div>
    <h2>Two Test</h2>
    <p>More content here...</p>
  </div>
);

const content = [
  'Today, 32% of Texan households do not subscribe to broadband internet. Certain regions of Texas have higher rates of availability, while others are lower.',
  <CustomComponent1 />,
  <CustomComponent2 />,
  <NeedsOne />,
  <VisionTwo />,
];

const text = [
  'Today, 32% of Texan households do not subscribe to broadband internet. Certain regions of Texas have higher rates of availability, while others are lower.',
  'Yesterday, 32% of Texan households do not subscribe to broadband internet. Certain regions of Texas have higher rates of availability, while others are lower.',
  'In three years...',
  'Step 4 Content',
  'Step 5 Content',
];

const TestScroll = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [scrollytellingCompleted, setScrollytellingCompleted] = useState(false);
  console.log(scrollytellingCompleted);


  const onStepEnter = ({ data, progress }) => {
    setActiveStep(data);
    setProgress(progress);

    // Check if the user has completed the scrollytelling section
    if (data === content.length - 1) {
      setScrollytellingCompleted(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = document.querySelector('.overall').getBoundingClientRect().top;
      // console.log(containerTop);
      // const lastStepTop = document.querySelector(`[data="${content.length - 1}"]`).getBoundingClientRect().top;

      // Check if the container is at top-0
      if (containerTop == 50) {
        setScrollytellingCompleted(!scrollytellingCompleted);
      }

      // // Check if the last step is at top-0
      // if (lastStepTop === 0) {
      //   setScrollytellingCompleted(true);
      // }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='overall h-screen w-screen'>
      <div className={`block md:flex h-[100vh] ${scrollytellingCompleted ? 'scrollable' : 'sticky'}`}>
        <div className={`flex-1 overflow-y-scroll h-screen ${scrollytellingCompleted ? 'scrollable' : 'sticky'}`}>
          <Scrollama onStepEnter={onStepEnter} offset={0.5}>
            {text.map((item, index) => (
              <Step key={index} data={index}>
                <div className="p-8 border-b h-screen">
                  <div className='ml-[50%] mt-[35%] font-sans' style={{ opacity: 1 - progress, transform: `translateY(${100 * progress}%)` }}>
                    {item}
                  </div>
                </div>
              </Step>
            ))}
          </Scrollama>
        </div>
        <div className="flex-1 h-full">
          {content[activeStep]}
        </div>
      </div>
    </div>
  );
};

export default TestScroll;
