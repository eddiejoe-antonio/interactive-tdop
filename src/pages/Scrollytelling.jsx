// Scrollytelling.js
import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';

const Scrollytelling = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const onStepEnter = ({ data, progress }) => {
    setActiveStep(data);
    setProgress(progress);
  };

  const imageUrls = [
    'https://via.placeholder.com/800x600?text=Step+1',
    'https://via.placeholder.com/800x600?text=Step+2',
    'https://via.placeholder.com/800x600?text=Step+3',
    // Add more image URLs as needed
  ];

  const textContent = [
    'Step 1 Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Step 2 Content: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Step 3 Content: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    // Add more text content as needed
  ];

  return (
    <div className="scrollytelling-container sticky top-0">
      <div className="grid grid-cols-2 gap-4">
        <div className="overflow-y-scroll h-screen pr-4">
          <Scrollama onStepEnter={onStepEnter} offset={0.5}>
            {textContent.map((text, index) => (
              <Step key={index} data={index}>
                <div className="p-8 border-b h-screen">
                  <p className="text-lg">{text}</p>
                </div>
              </Step>
            ))}
          </Scrollama>
        </div>
        <div className="col-span-1 h-screen overflow-hidden">
          {/* New image based on active step */}
          <img src={imageUrls[activeStep]} alt={`Step ${activeStep + 1}`} className="w-full h-full transform translate-x-[-100%]" style={{ transform: `translateX(${-100 * progress}%)` }} />
        </div>
      </div>
    </div>
  );
};

export default Scrollytelling;
