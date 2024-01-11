import React, { PureComponent } from 'react';
import { Scrollama, Step } from 'react-scrollama';

class ScrollytellingWithFixedBackground extends PureComponent {
  state = {
    activeStepIndex: 0,
    pastLastStep: false, // New state to determine when we've scrolled past the last step
  };

  onStepEnter = ({ data }) => {
    // If we're entering any step, the background should be fixed
    this.setState({ activeStepIndex: data, pastLastStep: false });
  };

  onStepExit = ({ direction, data }) => {
    const { steps } = this.props;
    // When exiting the last step going down, we'll set `pastLastStep` to true
    if (data === steps.length - 1 && direction === 'down') {
      this.setState({ pastLastStep: true });
    }
    // When scrolling back up at the first step, we should no longer be past the last step
    if (data === 0 && direction === 'up') {
      this.setState({ pastLastStep: false });
    }
  };

  render() {
    const { activeStepIndex, pastLastStep } = this.state;
    const { steps, backgroundImagePath } = this.props;

    return (
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background image */}
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
            // When past the last step, we prepare the background to be covered
            transform: pastLastStep ? 'translateY(-100vh)' : 'none',
            transition: 'transform 0.5s ease-in-out',
          }}
        />

        {/* Scrollytelling content */}
        <Scrollama onStepEnter={this.onStepEnter} onStepExit={this.onStepExit} offset={0.5}>
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
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    padding: '20px',
                    maxWidth: '600px',
                    textAlign: 'center',
                  }}
                >
                  {stepContent}
                </div>
              </div>
            </Step>
          ))}
        </Scrollama>

        {/* The following content on the page */}
        <div style={{ minHeight: '100vh' }}></div>
      </div>
    );
  }
}

ScrollytellingWithFixedBackground.defaultProps = {
  steps: [
    <div>Your text or component for step 1</div>,
    <div>Your text or component for step 2</div>,
    <div>Your text or component for step 3</div>,
    // Add as many steps as needed
  ],
  backgroundImagePath:
    'https://thumbnails.texastribune.org/SyIpz8gqP5L5JHeM298apD40-fs=/850x478/smart/https://static.texastribune.org/media/files/19c99721b34223c55f9367bb5a1c7a3c/0320%20Rural%20WiFi%20MF%2001%20TT.jpg',
};

export default ScrollytellingWithFixedBackground;

// import React, { PureComponent } from 'react';
// import { Scrollama, Step } from 'react-scrollama';

// class ScrollytellingWithFixedBackground extends PureComponent {
//   state = {
//     activeStepIndex: 0,
//     pastLastStep: false, // New state to determine when we've scrolled past the last step
//   };

//   onStepEnter = ({ data }) => {
//     // If we're entering any step, the background should be fixed
//     this.setState({ activeStepIndex: data, pastLastStep: false });
//   };

//   onStepExit = ({ direction, data }) => {
//     const { steps } = this.props;
//     // When exiting the last step going down, we'll set `pastLastStep` to true
//     if (data === steps.length - 1 && direction === 'down') {
//       this.setState({ pastLastStep: true });
//     }
//     // When scrolling back up at the first step, we should no longer be past the last step
//     if (data === 0 && direction === 'up') {
//       this.setState({ pastLastStep: false });
//     }
//   };

//   render() {
//     const { activeStepIndex, pastLastStep } = this.state;
//     const { steps, backgroundImagePath } = this.props;

//     return (
//       <div style={{ position: 'relative', overflow: 'hidden' }}>
//         {/* Background image */}
//         <div
//           style={{
//             position: 'fixed',
//             width: '100%',
//             height: '100vh',
//             backgroundImage: `url(${backgroundImagePath})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center center',
//             top: 0,
//             left: 0,
//             zIndex: -1,
//             // When past the last step, we prepare the background to be covered
//             transform: pastLastStep ? 'translateY(-100vh)' : 'none',
//             transition: 'transform 0.5s ease-in-out',
//           }}
//         />

//         {/* Scrollytelling content */}
//         <Scrollama onStepEnter={this.onStepEnter} onStepExit={this.onStepExit} offset={0.5}>
//           {steps.map((stepContent, index) => (
//             <Step data={index} key={index}>
//               <div
//                 style={{
//                   minHeight: '100vh',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   zIndex: 2,
//                 }}
//               >
//                 <div
//                   style={{
//                     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                     color: 'white',
//                     padding: '20px',
//                     maxWidth: '600px',
//                     textAlign: 'center',
//                   }}
//                 >
//                   {stepContent}
//                 </div>
//               </div>
//             </Step>
//           ))}
//         </Scrollama>

//         {/* The following content on the page */}
//         <div style={{ minHeight: '100vh' }}></div>
//       </div>
//     );
//   }
// }

// ScrollytellingWithFixedBackground.defaultProps = {
//   steps: [
//     <div>Your text or component for step 1</div>,
//     <div>Your text or component for step 2</div>,
//     <div>Your text or component for step 3</div>,
//     // Add as many steps as needed
//   ],
//   backgroundImagePath:
//     'https://thumbnails.texastribune.org/SyIpz8gqP5L5JHeM298apD40-fs=/850x478/smart/https://static.texastribune.org/media/files/19c99721b34223c55f9367bb5a1c7a3c/0320%20Rural%20WiFi%20MF%2001%20TT.jpg',
// };

// export default ScrollytellingWithFixedBackground;
