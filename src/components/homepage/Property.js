import React from 'react'
import PropertyInfo from './PropertyInfo'

const Property = (props) => {
  return (
    <>
        <div className='bg-gray-800 px-3 py-2 rounded-2xl'>
            <h3>
                {props?.name}
            </h3>
        </div>
        {/* <div>
            <PropertyInfo description='bla bla' />
        </div> */}
    </>
  )
}

export default Property
