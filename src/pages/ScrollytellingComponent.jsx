import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import { Scrollama, Step } from 'react-scrollama';
import one from '../assets/1.jpg'
import two from '../assets/2.avif'
import three from '../assets/3.avif'
import four from '../assets/3.jpg'
import NeedsOne from './content/NeedsOne';


const styles = {
  graphicContainer: {
    padding: '10vh 2vw 20vh',
    display: 'flex',
    justifyContent: 'space-between',
  },
  graphic: {
    flexBasis: '50%',
    position: 'sticky',
    width: '100%',
    height: '60vh',
    top: '20vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': {
      fontSize: '5rem',
      textAlign: 'center',
      color: '#fff',
    },
  },
  scroller: {
    flexBasis: '35%',
  },
  step: {
    margin: '0 auto 3rem 10rem',
    padding: '180px 0',
    border: '1px solid #333',
    '& p': {
      textAlign: 'center',
      padding: '1rem',
      fontSize: '1.8rem',
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
      'Today, 32% of Texan households do not subscribe to broadband internet...',
      'Yesterday, 32% of Texan households did not subscribe to broadband internet...',
      'In three years...',
      'Step 4 Content',
      'Step 5 Content',
    ];

    const customContent = [
      <img src={one} alt="Description of image one" />,
      <NeedsOne />,
      <img src={two} alt="Description of image two" />,
      <img src={three} alt="Description of image three" />,
      <img src={four} alt="Description of image three" />,
    ];

    return (
      <div>
        {/* Beginning of Scrolling Code */}
        <div className={classes.graphicContainer}>
          <div className={classes.scroller}>
            <Scrollama
              onStepEnter={this.onStepEnter}
              offset="0.5"
            >
              {textContent.map((value, index) => (
                <Step data={index} key={index}>
                  <div className={classes.step}>
                    <p>{value}</p>
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