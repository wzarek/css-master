import React from 'react'
import { FaHome, FaHandsHelping, } from 'react-icons/fa'
import { AiFillBulb } from "react-icons/ai"
import { BsTelephoneFill } from "react-icons/bs"
import MenuItem from './MenuItem'

const Menu = () => {
  return (
     <nav className='fixed inset-0 flex flex-col h-100 w-20 justify-evenly px-2'>
        <MenuItem icon={<FaHome size={'2em'} />} name='Home' url='#home' />
        <MenuItem icon={<FaHandsHelping size={'2em'} />} name='Tutorial' url='#tutorial' />
        <MenuItem icon={<AiFillBulb size={'2em'} />} name='About' url='#about' />
        <MenuItem icon={<BsTelephoneFill size={'2em'} />} name='Contact' url='#contact' />
     </nav>
  )
}

export default Menu
