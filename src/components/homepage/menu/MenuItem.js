import React from 'react'

const MenuItem = (props) => {
  return (
    <a href={props?.url} className='flex flex-col items-center justify-center relative group border-b-2 border-emerald-700 last:border-b-0 h-full'>
        {props?.icon}
      <h3 className='text-xs self-center  left-full hidden absolute bg-emerald-800 p-1 group-hover:block group-hover:text-gray-300'>{props?.name}</h3>
    </a>
  )
}

export default MenuItem
