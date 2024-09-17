import React from 'react'

const Buttons = (props) => {
  return (
    <button className='btn' onClick={props.onClick}>{props.value}</button>
  )
}

export default Buttons