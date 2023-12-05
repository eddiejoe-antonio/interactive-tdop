import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import PageOneText from '../PageOneTest';
import PageTwoText from '../PageTwoTest';
import test from '../assets/react.svg'

const ScrollamaDemo = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const table = [1, 2, 3, 4]

  return (
    <div style={{ margin: '0vh 0', border: '2px dashed skyblue' }}>
      {/* <div style={{ position: 'sticky', top: 0, border: '1px solid orchid' }}>
        I'm sticky. The current triggered step index is: {currentStepIndex}
      </div> */}
      <Scrollama offset={0.75} onStepEnter={onStepEnter} debug>
        {table.map((children, stepIndex) => (
          <Step data={children} key={stepIndex}>
            <div
              style={{
                margin: '90vh 0',
                border: '1px solid gray',
              }}
            className='grid grid-cols-12'
            >
                <div className='col-span-2 col-start-4'>I'm a Scrollama Step of index {stepIndex}</div>
                <div className='col-span-2 col-start-8'>
                    <img src={test} />
                </div>

            </div>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
};

export default ScrollamaDemo;