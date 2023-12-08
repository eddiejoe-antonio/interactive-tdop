// App.js
import React from 'react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import HeroLayout from './components/HeroLayout'
import IntroPage from './pages/IntroPage';
import VisionPage from './pages/VisionPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './components/Router';
import ScrollableTitle from './components/ScrollableTitle';
import Test from './components/Test';

const App = () => {
  return (
    // <Test />
    <MantineProvider>
      <Router />
    </MantineProvider>
  )
};


export default App;
