import React, { useEffect, useRef, useState } from 'react'

const Question1 = () => {
    const [count, setCount] = useState(0)
    const [runningCount, setRunningCount] = useState(true)

    let id = useRef(null) ;

    console.log(id, 3)

    // useEffect(()=>{

    // })
    
    useEffect(()=>{
        if(runningCount){
            console.log(id.current, 1)
         id.current = setInterval(() => {
            console.log('i am the problem')
            setCount((prev)=>prev+1)
        }, 1000);
        }
        return(()=>{
            console.log(id.current, 2,"unmounting....")
            if(id.current){
            clearInterval(id.current)
            }
        })
    },[])

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
