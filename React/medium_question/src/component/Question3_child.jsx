import React from 'react'

const Question3_child = ({updateParentsMsg}) => {
  
  const handleClick = ()=>{
    updateParentsMsg("New Msg Update from child")
  }
  return (
    <div>
      <button onClick={handleClick}>Update Paretn msg from child</button>
    </div>
  )
}

export default Question3_child
