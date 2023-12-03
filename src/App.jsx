import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Analytics from "./components/Analytics"
import Newsletter from "./components/Newsletter"
import HeroLayout from "./components/HeroLayout"
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import ButtonApp from "./components/Button"

function App() {

  return (
    <>
      <MantineProvider>
        <Navbar />
        <HeroLayout />
        {/* <Hero /> */}
        {/* <Analytics /> */}
        {/* <Newsletter /> */}
      </MantineProvider>
    </>
  )
}

export default App
