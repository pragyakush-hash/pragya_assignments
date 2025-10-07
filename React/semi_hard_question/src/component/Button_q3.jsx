import React from 'react'

const Button_q3 = ({text,handleOnClick,color}) => {
  return (
    <div>
      <button style={{backgroundColor:color}} onClick={handleOnClick}>{text}</button>
    </div>
  )
}

export default Button_q3
