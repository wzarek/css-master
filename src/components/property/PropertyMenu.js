import React from 'react'
import Property from './Property'

const PropertyMenu = () => {
  return (
      <div className='flex flex-row gap-10  mt-4 w-75[vw] overflow-x-scroll bg-slate-700 p-5 rounded-2xl'>
          <Property name='Border-radius' url='/temp' />
          <Property name='Animation' />
          <Property name='Box-shadow' />
          <Property name='Gradient' />
          <Property name='Property' />
          <Property name='Property1' />
          <Property name='Property2' />
          <Property name='Property3' />
          <Property name='Property4' />
          <Property name='Property5' />
          <Property name='Property6' />
          

    </div>
  )
}

export default PropertyMenu