import React from 'react'

const MenuItem = (props) => {
  return (
    <a href={props?.url} className='flex flex-col items-center relative group'>
        {props?.icon}
      <h3 className='text-xs mt-2 left-full hidden absolute group-hover:block group-hover:text-gray-300'>{props?.name}</h3>
    </a>
  )
}

export default MenuItem
