import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import HeroContent from './components/HeroContent'
import FillerText from './components/FillerText'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
    <HeroContent></HeroContent>
    </>
  )
}

export default App
