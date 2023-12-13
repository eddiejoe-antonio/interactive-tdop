import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';

const TwoPaneScroll = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps = [
    {
      text: 'Step 1 Text',
      imageSrc: 'image1.jpg',
    },
    {
      text: 'Step 2 Text',
      imageSrc: 'image2.jpg',
    },
    {
      text: 'Step 3 Text',
      imageSrc: 'image3.jpg',
    },
    // ... add more steps as needed
  ];

  const onStepEnter = ({ data }) => {
    setActiveStepIndex(data);
  };

  return (
    <div className="two-pane-scroll" style={{ display: 'flex', height: '100vh' }}>
      <div className="text-panel" style={{ flex: 1, overflowY: 'scroll' }}>
        <Scrollama onStepEnter={onStepEnter} offset={0.5}>
          {steps.map((step, index) => (
            <Step key={index} data={index}>
              <div style={{ margin: '50vh 0', border: '1px solid black', padding: '20px' }}>
                {step.text}
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>
      <div className="image-panel" style={{ flex: 1, backgroundColor: '#EEE' }}>
        <img 
          src={steps[activeStepIndex].imageSrc} 
          alt="Scrollytelling Visual" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default TwoPaneScroll;
