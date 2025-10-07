import React, { useState } from 'react'

const Question5 = () => {
    const [msg, setMsg] = useState(true)
  
  return (
    <div>
        {msg && <p>Hello React</p> }
        <button onClick={()=>setMsg(!msg)}>{msg ? "hide":"show"}</button>
    </div>
  )
}

export default Question5
