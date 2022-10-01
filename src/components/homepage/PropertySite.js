import React from 'react'

const PropertySite = () => {
  return (
      <div>
          <h1>This is just for test </h1>
          <div className='h-10 w-10 box-content bg-black my-7 mx-auto border-white border-solid'/> 
          <form className='justify-evenly' >
              Horizontal
              <input type="number" className='' />
              Vertical
              <input type="number" className='' />
              Blur
              <input type="number"className=''  />
              Spread
              <input type="number" className='' />
              Color
              <input type="color"className=''  />
        </form>



    </div>
  )
}

export default PropertySite