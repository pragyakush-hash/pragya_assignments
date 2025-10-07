import React from 'react'

const Question2_child = ({number}) => {
  console.log("re-render child")
  return (
    <div>
      <h3 >{number}</h3>
    </div>
  )
}

export default Question2_child
