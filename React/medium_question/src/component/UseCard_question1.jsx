import React from 'react'

const UseCard_question1 = ({user}) => {
    const {name,age} = user
  return (
    <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
    </div>
  )
}

export default UseCard_question1
