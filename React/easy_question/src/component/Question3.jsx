import React, { useState } from 'react'

const Question3 = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <button onClick={()=>setCount((prev)=>prev + 1)}>Increase counter +</button>
        <h3>{count}</h3>
        <button onClick={()=>setCount((prev)=>prev - 1)}>Decrease counter -</button>
      
    </div>
  )
}

export default Question3
