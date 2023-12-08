// App.js
import React from 'react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import HeroLayout from './components/HeroLayout'
import IntroPage from './pages/IntroPage';
import VisionPage from './pages/VisionPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './components/Router';
import ScrollableComponent from './components/ScrollableComponent';


const App = () => {
  return (
    <ScrollableComponent />
    // <MantineProvider>
    //   <Router />
    // </MantineProvider>
    // <MantineProvider>
    //   <HeroLayout></HeroLayout>
    //   {/* <IntroPage /> */}
    //   <VisionPage />
    // </MantineProvider>
  )
  // const sections = [<PageOneTest/>, <PageTwoText />, <PageThreeTest />];
  // // const sections = [<Section1 />, <Section2 />, <Section3 />, <Section4 />, <Section5 />];
  // const [activeSection, setActiveSection] = useState(0);

  // const handleSectionClick = (index) => {
  //   setActiveSection(index);
  //   scroll.scrollTo(`section${index + 1}`, { smooth: true, duration: 500 });
  // };

  // return (
  //   <MantineProvider>
  //     <HeroLayout />
  //     <Navbar />
  //     <Sidebar />
  //     <div className="app flex">
  //       <DotsNav
  //         sections={sections}
  //         activeSection={activeSection}
  //         onSectionClick={handleSectionClick}
  //         activeDotColor="#666"
  //         regularDotColor="#ececec"
  //       />
  //       <div className="content flex-1">
  //         {sections.map((section, index) => (
  //           <ScrollElement key={index} name={`section${index + 1}`}>
  //             {section}
  //           </ScrollElement>
  //         ))}
  //       </div>
  //     </div>
  //   </MantineProvider>
  // );
};


export default App;
