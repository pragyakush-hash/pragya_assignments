import React, { useEffect, useState } from 'react'

const Question1 = () => {
    const [count, setCount] = useState(0)
    const [runningCount, setRunningCount] = useState(true)

    let id = null;
    
    useEffect(()=>{
        if(runningCount){
         id = setInterval(() => {
            setCount((prev)=>prev+1)
        }, 100);
        }
        return(()=>{
            if(id){
            clearInterval(id)
            }
        })
    },[runningCount])

    const handleStart = ()=>{
        setRunningCount(true)

    }
    const handleStop = ()=>{
        setRunningCount(false)
    }
    const handleReset = ()=>{
        setRunningCount(false)
        setCount(0)        
    }
  return (
    <div>
        <h2>{count}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop} >Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Question1
