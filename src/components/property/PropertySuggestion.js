import React from 'react'
import { FaBorderNone } from 'react-icons/fa'

const PropertySuggestion   = (props) => {
  return (
      <div className='mx-1 my-1 border-2 border-black'>  
          <img src='none.webp' className='max-w-s max-h-xs '></img>
          <h1 className='text-center border-2 border-black'>{props?.name}</h1>
    </div>
  )
}

export default PropertySuggestion