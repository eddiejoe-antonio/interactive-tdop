import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Hamburger from './Hamburger'
import IconLogo from './IconLogo'
import './navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar bg-[#FFFDF6]">
      <div className="container">
        <div className={`nav-elements  ${showNavbar}`}>
          <IconLogo />
        </div>
        <div className='uppercase text-xs font-bold tracking-widest'>The Texas Digital Opportunity Plan</div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'} uppercase text-sm`}>
          <ul>
            <li>
              <NavLink to="/">Navigate</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
    
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar