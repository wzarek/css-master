import React from 'react'
import ProperiesMenu from './ProperiesMenu'
import WelcomeInfo from './WelcomeInfo'
import Menu from './menu/Menu'
const Homepage = () => {
  return (
    <main className='w-3/4 m-auto'>
      <Menu/>
      <WelcomeInfo />
      <ProperiesMenu />
    </main>
  )
}

export default Homepage
