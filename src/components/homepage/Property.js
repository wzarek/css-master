import React from 'react'
import PropertyInfo from './PropertyInfo'
import { Link } from 'react-router-dom'
const Property = (props) => {
  return (
    <>
        <Link to={props?.url} className='bg-gray-800 px-3 py-2 rounded-2xl' >
            <h3>
                {props?.name}
          </h3>
          </Link>
        {/* <div>
            <PropertyInfo description='bla bla' />
        </div> */}
    </>
  )
}

export default Property
