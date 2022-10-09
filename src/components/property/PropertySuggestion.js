import React from 'react'
import { FaBorderNone } from 'react-icons/fa'

const PropertySuggestion   = (props) => {
  return (
      <div>  
          <img src='none.webp'></img>
          <h1>{props?.name}</h1>
    </div>
  )
}

export default PropertySuggestion