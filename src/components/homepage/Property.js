import React from 'react'
import { Link } from 'react-router-dom'

const Property = (props) => {
  return (
    <div className='flex flex-wrap gap-2 w-[23%] pt-10  bg-blue-400/20 rounded-2xl shadow-md backdrop-blur-sm z-0 cursor-pointer  relative '>
      <div className='items-center flex h-30 justify-center overflow-hidden w-full'>
        <img src='favicon.ico' />
      </div>
      <div className='items-center flex flex-grow justify-start py-5'>
        <div className='text-lg leading-5 p-5 w-full text-center'>
          <h3>{props?.name}</h3>
          <h4>{props.description}</h4>
        </div>
      </div>
    </div>
  )
}

export default Property
