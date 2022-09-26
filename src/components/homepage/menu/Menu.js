import React from 'react'
import { FaHome, FaHandsHelping, } from 'react-icons/fa'
import { AiFillBulb } from "react-icons/ai"
import { BsTelephoneFill } from "react-icons/bs"
import MenuItem from './MenuItem'

const Menu = () => {
  return (
   <>
      <div className='fixed inset-0 h-full w-20 bg-emerald-800 opacity-40'></div>
     <nav className='fixed inset-0 flex flex-col h-full w-20 justify-evenly px-2'>
        <MenuItem icon={<FaHome className='group-hover:fill-blue-500' size={'2em'} />} name='Home' url='#home' />
        <MenuItem icon={<FaHandsHelping className='group-hover:fill-blue-500' size={'2em'} />} name='Tutorial' url='#tutorial' />
        <MenuItem icon={<AiFillBulb className='group-hover:fill-yellow-500' size={'2em'} />} name='About' url='#about' />
        <MenuItem icon={<BsTelephoneFill className='group-hover:fill-blue-500' size={'2em'} />} name='Contact' url='#contact' />
     </nav>
   </>
  )
}

export default Menu
