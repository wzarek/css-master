import React from 'react'

const WelcomeInfo = () => {
  return (
    <div className='rounded-2xl relative' >
      <div className='h-full w-full absolute bg-blue-400/20 rounded-2xl shadow-md blur-sm border-2 border-solid border-blue-500/10'></div>
      <div className='p-6'>
        <h1 className='text-2xl font-semibold'>Welcome to CSS Master!</h1>
        <p className='mt-3 font-light'>
          Don't know how to make a pleasant animation? Or just want to quickly test some CSS properties?
          We're here for you! And this is what our tool is capable of
        </p>
        <div>
          some footage, animations, sliders, etc.
        </div>
      </div>
    </div>
  )
}

export default WelcomeInfo
