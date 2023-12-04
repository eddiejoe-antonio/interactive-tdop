import React from "react"
import Navbar from "./components/Navbar"
import HeroLayout from "./components/HeroLayout"
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import PageOneTest from "./components/PageOneTest"
import PageTwoText from "./components/PageTwoTest"
import ScrollamaDemo from "./components/ScrollamaDemo";
import DotsNav from "./components/DotsNav";

function App() {

  return (
    <>
      <MantineProvider>
        <Navbar />
        <HeroLayout />
        <PageOneTest />
        <PageTwoText />
        {/* <ScrollamaDemo /> */}
        {/* <DotsNav numOfSections={6} /> */}
      </MantineProvider>
    </>
  )
}

export default App
