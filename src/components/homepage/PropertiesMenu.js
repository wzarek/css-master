import React from 'react'
import Property from './Property'

const PropertiesMenu = () => {
  return (
    <div className='flex flex-row justify-evenly mt-4'>
      <Property name='Border-radius' url='/temp' />
      <Property name='Animation' />
      <Property name='Box-shadow' />
      <Property name='Gradient' />
    </div>
  )
}

export default PropertiesMenu
