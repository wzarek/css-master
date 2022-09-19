import React from 'react'
import ProperiesMenu from './ProperiesMenu'
import WelcomeInfo from './WelcomeInfo'

const Homepage = () => {
  return (
    <main className='w-3/4 m-auto'>
      <WelcomeInfo />
      <ProperiesMenu />
    </main>
  )
}

export default Homepage
