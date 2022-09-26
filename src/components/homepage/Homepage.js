import React from 'react'
import PropertiesMenu from './PropertiesMenu'
import WelcomeInfo from './WelcomeInfo'
import Menu from './menu/Menu'
const Homepage = () => {
  return (
    <main className='w-3/4 m-auto'>
      <WelcomeInfo />
      <PropertiesMenu />
    </main>
  )
}

export default Homepage
