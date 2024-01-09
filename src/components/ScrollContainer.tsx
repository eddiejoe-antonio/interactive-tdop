import React from 'react';
import ButtonLight from './ButtonLight.js';
import Fetch from './Fetch';
import SingleStackedBarChart from './SingleStackedBarChart.js';

const ScrollContainer = ({
  title,
  text,
  buttonText,
  imgHolder,
}: {
  title: string;
  text: string;
  buttonText: string;
  imgHolder: string;
}) => {
  return (
    <div className='h-screen'>
      <div>
        <h3 className='uppercase text-xs'>{title}</h3>
        <p className='font-sans'>{text}</p>
      </div>
      <div className='mt-[10vh] bg-red'>
        {/* <DumbbellChart data={data}/> */}
        <SingleStackedBarChart width={400} height={40} value={68} />
        {/* <Fetch /> */}
        {/* <TestChart /> */}
        {/* <img src={imgHolder} /> */}
      </div>
      <div className='mt-[10vh]'>
        <ButtonLight className='mt-50vh' text={buttonText} />
      </div>
    </div>
  );
};

export default ScrollContainer;
