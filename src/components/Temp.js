import React, { useRef, useState, useEffect } from 'react'

const Temp = () => {
    const divRef = useRef()
    const [borderData, setBorderData] = useState({left: 1, right: 1, bottom: 1, top: 1})

    useEffect(() => {
        divRef.current.style.borderLeftWidth = `${borderData.left}px`
        divRef.current.style.borderRightWidth = `${borderData.right}px`
        divRef.current.style.borderBottomWidth = `${borderData.bottom}px`
        divRef.current.style.borderTopWidth = `${borderData.top}px`
    }, [borderData])

  return (
    <div>
      <h1>This is temporary solution / just for testing [border-width]</h1>
      <div className='h-10 w-10 box-content bg-black my-7 mx-auto border-white border-solid' ref={divRef}></div>
      <form>
        left:
        <input type='number' onChange={e => setBorderData(prev => {return {...prev, ...{left: e.target.valueAsNumber}}})} value={borderData.left} />
        top:
        <input type='number' onChange={e => setBorderData(prev => {return {...prev, ...{top: e.target.valueAsNumber}}})} value={borderData.top} />
        right:
        <input type='number' onChange={e => setBorderData(prev => {return {...prev, ...{right: e.target.valueAsNumber}}})} value={borderData.right} />
        bottom:
        <input type='number' onChange={e => setBorderData(prev => {return {...prev, ...{bottom: e.target.valueAsNumber}}})} value={borderData.bottom} />
      </form>
    </div>
  )
}

export default Temp
