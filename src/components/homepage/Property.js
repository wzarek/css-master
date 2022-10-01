import React from 'react'
import PropertyInfo from './PropertyInfo'
import { Link } from 'react-router-dom'
const Property = (props) => {
  return (
    <>
      <div className='bg-gray-800 px-3 py-2 rounded-2xl'>
        <Link to={props?.url} >
            <h3>
                {props?.name}
          </h3>
          </Link>
        </div>
        {/* <div>
            <PropertyInfo description='bla bla' />
        </div> */}
    </>
  )
}

export default Property
