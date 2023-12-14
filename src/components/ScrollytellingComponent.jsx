import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import { Scrollama, Step } from 'react-scrollama';
import one from '../assets/1.jpg'
import two from '../assets/2.avif'
import three from '../assets/3.avif'
import four from '../assets/3.jpg'
import NeedsOne from '../pages/content/NeedsOne';
import ScrollContainer from './ScrollContainer';
import TestBar from '../assets/testbar.png'
import BlankMap from '../assets/txMapBlank.png'
import RegionsMap from '../assets/txMapRegions.png'
import ComparativeMap from '../assets/txMapComparative.png'
import dumbellA from '../assets/dumbellA.png'
import dumbellB from '../assets/dumbellB.png'
import swarmA from '../assets/swarmA.png'
import swarmB from '../assets/swarmB.png'


const styles = {
  graphic: {
    flexBasis: '50%',
    position: 'sticky',
    width: '100%',
    height: '100vh',
    top: '2vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
      maxHeight: '80%',
      maxWidth: '80%',
      objectFit: 'contain',
    }
  },
  scroller: {
    flexBasis: '40%',
  },
  step: {
    margin: '0 auto 2rem 15rem',
    padding: '200px 0',
    '& p': {
      fontSize: '1rem',
      margin: 0,
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },

};

class Demo extends PureComponent {
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
      return <img src={content} alt="" />;
    } else {
      return <p>{content}</p>;
    }
  }

  render() {
    const { classes } = this.props;
    const { data } = this.state;

    const textContent = [
      <ScrollContainer text='Today, 32% of Texan households do not subscribe to broadband internet. 
      Certain regions of Texas have higher rates of availability, while others are lower. ' title='Goal No. 1 | KPI 1.1' buttonText='Dive deeper into Broadband Availability' imgHolder={TestBar}/> ,
      <ScrollContainer text='Click the map at right to learn more about the issues in your region!' title='Goal No. 1 | KPI 1.1' buttonText='Dive deeper into Broadband Availability' imgHolder={TestBar}/>,
      <ScrollContainer text='Select any two geographies to compare the issues below.  ' title='Goal No. 1 | KPI 1.1' buttonText='Dive deeper into Broadband Availability'/>,
      <ScrollContainer text='In particular, lack of available or adequate internet service is more prevalent among rural residents, veterans, low-income households, and aging individuals.  ' title='Goal No. 1 | KPI 1.1' buttonText='Dive deeper into Broadband Availability'/>,
      <ScrollContainer text='In particular, lack of available or adequate internet service is more prevalent among rural residents, veterans, low-income households, and aging individuals. ' title='Goal No. 1 | KPI 1.1' buttonText='Dive deeper into Broadband Availability'/>,
      <ScrollContainer text='In particular, lack of available or adequate internet service is more prevalent among rural residents, veterans, low-income households, and aging individuals. ' title='Goal No. 1 | KPI 1.1' buttonText='Dive deeper into Broadband Availability'/>,
      <ScrollContainer text='In particular, lack of available or adequate internet service is more prevalent among rural residents, veterans, low-income households, and aging individuals. ' title='Goal No. 1 | KPI 1.1' buttonText='Dive deeper into Broadband Availability'/>,
    ];

    const customContent = [
      <img src={BlankMap} alt="Description of image one" />,
      <img src={RegionsMap} alt="Description of image three" />,
      <img src={ComparativeMap} alt="Description of image two" />,
      <img src={dumbellA} alt="Description of image three" />,
      <img src={dumbellB} alt="Description of image three" />,
      <img src={swarmA} alt="Description of image three" />,
      <img src={swarmB} alt="Description of image three" />,
    ];

    return (
      <div>
        {/* Beginning of Scrolling Code */}
        <div className='px-[2vw] py-[10vh] grid md:flex justify-between w-screen'>
          <div className={classes.scroller}>
            <Scrollama
              onStepEnter={this.onStepEnter}
              offset="0.5"
            >
              {textContent.map((value, index) => (
                <Step data={index} key={index}>
                  <div className={classes.step}>
                    {value}
                  </div>
                </Step>
              ))}
            </Scrollama>
          </div>
          <div className={classes.graphic}>
            {this.renderCustomContent(customContent[data])}
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Demo);