import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TestScroll from './pages/TestScroll.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { MantineProvider } from '@mantine/core'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
    <Router>
      <TestScroll />
      {/* <App /> */}
    </Router>
    </MantineProvider>
  </React.StrictMode>,
)
