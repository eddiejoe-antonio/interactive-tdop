import React, { PureComponent } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import ScrollContainer from './ScrollContainer';
import TestBar from '../assets/testbar.png'
import BlankMap from '../assets/txMapBlank.png'
import RegionsMap from '../assets/txMapRegions.png'
import ComparativeMap from '../assets/txMapComparative.png'
import dumbellA from '../assets/dumbellA.png'
import dumbellB from '../assets/dumbellB.png'
import swarmA from '../assets/swarmA.png'
import swarmB from '../assets/swarmB.png'
import Fetch from './Fetch.jsx';
import MapContainer from './MapContainer.jsx';
import DumbbellChart from './DumbbellChart.jsx'
import DualMap from './DualMap.jsx';


class ScrollytellingComponent extends PureComponent {
  state = {
    data: 0,
  };

  onStepEnter = e => {
    this.setState({ data: e.data });
  };

  renderCustomContent = (content) => {
    if (React.isValidElement(content)) {
      return content;
    } else if (typeof content === 'string') {
      return <img src={content} alt="" className="max-h-[80%] max-w-[80%] object-contain" />;
    } else {
      return <p>{content}</p>;
    }
  }

  render() {
    const { classes } = this.props;
    const { data } = this.state;
 
    const dataDumbbell = [
      { name: "Rural Residents", startValue: 100, endValue: 41 },
      { name: "Veterans", startValue: 100, endValue: 43 },
      { name: "Low-Income Households", startValue: 100, endValue: 39 },
      { name: "Aging Individuals", startValue: 100, endValue: 53 },
      // ... more data ...
  ];

    const textContent = [
      <ScrollContainer text='Today, 10% of Texan households do not subscribe to broadband internet. 
      Certain regions of Texas have higher rates of availability, while others are lower.' title='Goal No. 1 | KPI 1.1' buttonText='Dive deeper into Broadband Availability' imgHolder={TestBar}/> ,
      <ScrollContainer text='Click the map at right to learn more about the issues in your region!' title='Goal No. 1 | KPI 1.1' buttonText='Dive deeper into Broadband Availability' imgHolder={TestBar}/>,
      <ScrollContainer text='Select any two geographies to compare the issues at right.  ' title='Goal No. 1 | KPI 1.1' buttonText='Dive deeper into Broadband Availability'/>,
      <ScrollContainer text='In particular, lack of available or adequate internet service is more prevalent among rural residents, veterans, low-income households, and aging individuals.  ' title='Goal No. 1 | KPI 1.1' buttonText='Dive deeper into Broadband Availability'/>,
      <ScrollContainer text='The State of Texas is targeting that 80% of Texans subscribe to reliable broadband in their homes by 2030.  ' title='Goal No. 1 | KPI 1.1' buttonText='Dive deeper into Broadband Availability'/>,
      <ScrollContainer text='The State of Texas is targeting that 80% of Texans subscribe to reliable broadband in their homes by 2030. ' title='Goal No. 1 | KPI 1.1' buttonText='Dive deeper into Broadband Availability'/>,
    ];

    const customContent = [
      <MapContainer />,
      // <Fetch />,
      // <img src={BlankMap} alt="Description of image one" />,
      // <img src={RegionsMap} alt="Description of image three" />,
      <MapContainer />,
      <DualMap />,
      // <img src={ComparativeMap} alt="Description of image two" />,
      <DumbbellChart data={dataDumbbell} />,
      // <img src={dumbellA} alt="Description of image three" />,
      // <img src={dumbellB} alt="Description of image three" />,
      <img src={swarmA} alt="Description of image three" />,
      <img src={swarmB} alt="Description of image three" />,
    ];

    return (
      <div className='px-2 py-[10vh] w-screen'>
        {/* Beginning of Scrolling Code */}
        <div className='hidden md:flex md:justify-between'>
        <div className='md:flex-basis-30% mb-10 px-[5vw] md:mb-0'>
            <Scrollama
              onStepEnter={this.onStepEnter}
              offset="0.5"
            >
              {textContent.map((value, index) => (
                <Step data={index} key={index}>
                  <div className='p-[10rem]'>
                    {value}
                  </div>
                </Step>
              ))}
            </Scrollama>
          </div>
          {/* Graphic section */}
          <div className='w-[100%] md:flex-basis-80% h-screen sticky top-[2vh] flex items-center justify-center'>
            {this.renderCustomContent(customContent[data])}
          </div>
        </div>
      </div>
    );
  }
}

export default ScrollytellingComponent;