import React, { useEffect, useState } from 'react'

const Question4 = () => {
  const [number, setNumber] = useState(0)
  useEffect(()=>{
    console.log("display a msg every time when state is change")
  },[number])
  return (
    <div>
      <h2>{number}</h2>
      <button onClick={()=>setNumber((prev)=>prev+1)}>Increase number</button>
      
    </div>
  )
}

export default Question4
