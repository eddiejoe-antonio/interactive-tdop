import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from './Logo'
import { Menu, MenuItem } from '@mantine/core'

const Navbar = () => {
    const [nav, setNav] =useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    const [opened, setOpened] = useState(false);

  return (
    <div className='z-50 flex sticky justify-between items-center top-0 h-16 mx-auto shadow-md text-[#111] bg-[#FFFDF6] w-screen'>
      <div className='hidden md:flex ml-10 top-8 w-[35%]'>
        <Logo />
      </div>
      <h1 className='w-full text-xs whitespace-nowrap uppercase font-bold text-[#111] tracking-widest px-4 md:px-0'><a href='#'>The Texas Digital Opportunity Plan</a></h1>
      <ul className='hidden md:flex'>
          <li className='p-8 uppercase tracking-widest text-xs'><a href='#'>Navigate</a></li>
        <li className='p-8 uppercase tracking-widest text-xs'><a href='https://comptroller.texas.gov/programs/broadband/'>About</a></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden mx-[20px]'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[75%] h-full border-r border-r-[#dedede] bg-[#333] ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
        <div>
         <h1 className='w-full text-sm uppercase font-bold p-10 text-[#fff] bg-[#111]'>Texas Digital Opportunity Plan</h1>
        </div>
        <ul className='uppercase p-4'>
            <li className='p-4  text-white border-b'>Geographic Introduction</li>
            <li className='p-4  text-white border-b'>Interactive TDOP</li>
            <li className='p-4  text-white border-b'>Data Dashboards</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
