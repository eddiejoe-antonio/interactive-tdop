import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { MantineProvider } from '@mantine/core'
import Fetch from './components/Fetch.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
    <Router>
      <App />
    </Router>
    </MantineProvider>
  </React.StrictMode>,
)
