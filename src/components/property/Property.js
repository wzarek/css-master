import React from 'react'
import { Link } from 'react-router-dom'
const Property = (props) => {
  return (
    <>
        <Link to={props?.url} className='bg-gray-800 px-3 py-2 rounded-2xl min-w-[120px] text-center hover:bg-slate-600' >
            <h3 className='text-xs'>
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
