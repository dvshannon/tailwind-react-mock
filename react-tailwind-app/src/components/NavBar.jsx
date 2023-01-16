import { useState} from 'react'

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const NavBar = () => {
  return (
    <nav className="w-4 flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]"/>
    </nav>
  )
}

export default NavBar