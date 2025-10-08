import React, { useState } from 'react'

const Question3 = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h2>{count}</h2>
      <button onClick={()=>setCount((prev)=>prev+1)} disabled={count===20}>inc+</button>
      <button onClick={()=>setCount((prev)=>prev-1)} disabled={count===0}>dec+</button>
    </div>
  )
}

export default Question3
