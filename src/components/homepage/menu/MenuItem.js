import React from 'react'

const MenuItem = (props) => {
  return (
    <a href={props?.url} className='flex flex-col items-center relative group'>
        {props?.icon}
      <h3 className='text-xs top-1/4 left-full hidden absolute bg-emerald-800 p-1 group-hover:block group-hover:text-gray-300'>{props?.name}</h3>
    </a>
  )
}

export default MenuItem
