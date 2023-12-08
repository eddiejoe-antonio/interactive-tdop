// App.js
import React from 'react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './components/Router';


const App = () => {
  return (
    // <Test />
    <MantineProvider>
      <Router />
    </MantineProvider>
  )
};


export default App;
