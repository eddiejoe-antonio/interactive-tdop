import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TestScroll from './pages/TestScroll.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { MantineProvider } from '@mantine/core'
import ScrollytellingComponent from './pages/ScrollytellingComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
    <Router>
      {/* <ScrollytellingComponent /> */}
      <App />
    </Router>
    </MantineProvider>
  </React.StrictMode>,
)
