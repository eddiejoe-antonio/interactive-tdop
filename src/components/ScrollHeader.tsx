import React, { PureComponent } from 'react';
import { Scrollama, Step } from 'react-scrollama';

class ScrollytellingWithFixedBackground extends PureComponent {
  state = {
    activeStepIndex: 0,
    isBackgroundVisible: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { id } = this.props;
    const element = document.getElementById(id);
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    this.setState({ isBackgroundVisible: isVisible });
  };

  onStepEnter = ({ data }) => {
    this.setState({ activeStepIndex: data });
  };

  render() {
    const { activeStepIndex, isBackgroundVisible } = this.state;
    const { steps, backgroundImagePath, id } = this.props;

    return (
      <div id={id} style={{ position: 'relative', overflow: 'hidden' }}>
        {isBackgroundVisible && (
          <div
            style={{
              position: 'fixed',
              width: '100%',
              height: '100vh',
              backgroundImage: `url(${backgroundImagePath})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              top: 0,
              left: 0,
              zIndex: -1,
              transform: activeStepIndex === steps.length - 1 ? 'translateY(0)' : 'none',
              transition: 'transform 0.5s ease-in-out',
            }}
          />
        )}
        <Scrollama onStepEnter={this.onStepEnter}>
          {steps.map((stepContent, index) => (
            <Step data={index} key={index}>
              <div
                style={{
                  minHeight: '100vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    color: 'white',
                    padding: '2rem',
                    maxWidth: '35rem',
                    margin: '2rem',
                  }}
                >
                  {stepContent}
                </div>
              </div>
            </Step>
          ))}
        </Scrollama>
        <div style={{ minHeight: '50vh' }}></div>
      </div>
    );
  }
}

ScrollytellingWithFixedBackground.defaultProps = {
  steps: [
    <div>
      {/* <h1 className='uppercase py-2'>Introduction</h1> */}
      <p>
        More and more each day, our lives depend on using the internet. Once a luxury, the internet
        has now become{' '}
        <strong>a necessity for access to health, education, employment, and many services.</strong>
      </p>
    </div>,
    <div>
      <p>
        Yet <strong>not all Texas residents experience the same digital opportunity.</strong> Some
        Texans thrive in the digital world, while others struggle just to find an internet
        connection.
      </p>
    </div>,
    <div>
      <p>
        In 2023, the Texas Broadband Development Office (BDO) brought together people and
        communities from across the state to ask about the barriers and challenges that Texans face
        when they try to get online and use the internet. They also asked about who is already
        working to support the digital needs of Texas communities, and how they’re doing it.
      </p>
    </div>,
    <div>
      <p>
        <strong>Based on what the BDO heard from you,</strong> they built a plan for a new state of
        digital opportunity in Texas, in which every Texan has access to:
      </p>
      <ul className='list-disc my-4 mx-4'>
        <li>high-quality, affordable broadband internet service</li>
        <li>high-quality, affordable internet-enabled devices;</li>
        <li>digital skills liaining;</li>
        <li>and cybersecurity protection.</li>
      </ul>
    </div>,
    <div>
      <p>Scroll on to learn more about the Texas Digital Opportunity Plan!</p>
    </div>,
  ],
  backgroundImagePath: '', // Default background image path
  id: 'scrollytelling-component', // Default ID
};

export default ScrollytellingWithFixedBackground;
