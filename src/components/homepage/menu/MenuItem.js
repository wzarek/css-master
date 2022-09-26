import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = (props) => {
  return (
    <Link to={props?.url} className='flex flex-col items-center relative group'>
        {props?.icon}
      <h3 className='text-xs top-1/4 left-full hidden absolute bg-emerald-800 p-1 group-hover:block'>{props?.name}</h3>
    </Link>
  )
}

export default MenuItem
