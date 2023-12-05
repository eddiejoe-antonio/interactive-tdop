import React from "react"
import Navbar from "./components/Navbar"
import HeroLayout from "./components/HeroLayout"
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import PageOneTest from "./components/PageOneTest"
import PageTwoText from "./components/PageTwoTest"
import PageThreeTest from "./components/PageThreeTest";

function App() {

  return (
    <>
      <MantineProvider>
        <Navbar />
        <HeroLayout />
        <PageOneTest />
        <PageTwoText />
        <PageThreeTest />
      </MantineProvider>
    </>
  )
}

export default App
