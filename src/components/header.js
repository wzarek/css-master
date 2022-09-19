import React from 'react'

const HeaderComponent = (props) => {
    return (
        <>
        <h1>
            header
        </h1>
        <div>
                masno fest {props.name ?? 'nie podales name'}
        </div>
    </>
  )
}

export default HeaderComponent