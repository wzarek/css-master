import React from 'react'
import Property from './Property'

const PropertiesMenu = () => {
  return (
    <div className='flex flex-row justify-evenly mt-4'>
      <Property name='border-radius' />
      <Property name='animation' />
      <Property name='box-shadow' />
      <Property name='gradient' />
    </div>
  )
}

export default PropertiesMenu
