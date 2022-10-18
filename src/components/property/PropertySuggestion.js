import React from 'react'

const PropertySuggestion = (props) => {
  return (
    <div className='mx-1 my-1 border-2 border-black relative group overflow-hidden'>  
          <img src='none.webp' className='w-full aspect-square duration-300 cursor-pointer group-hover:scale-110'></img>
          <h3 className='text-center text-green-600 absolute bottom-0 left-0 w-full bg-slate-500 bg-opacity-70 backdrop-blur-sm p-1 duration-300 group-hover:p-5'>{props?.name}</h3>
    </div>
  )
}

export default PropertySuggestion