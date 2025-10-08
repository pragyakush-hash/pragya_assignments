import React, { useEffect, useRef, useState } from 'react'

const Bonus = () => {
    const [timer, setTimer] = useState(0)
    let intervalId = useRef(null)

    useEffect(()=>{
        console.log("mounted phase")
        return(()=>{
            clearInterval(intervalId.current)
            console.log("unmounted phase")
        })
    },[])
    const handleStart = ()=>{
        if(!intervalId.current){
            intervalId.current = setInterval(()=>{
                setTimer((prev)=>prev+1)
            },1000)
        }
        console.log("timer start...")
    }
    const handleStop = () =>{
        clearInterval(intervalId.current)
        intervalId.current = null
        console.log("timer stop.....")
    }

    const handleReset = ()=>{
        clearInterval(intervalId.current)
        setTimer(0)
        intervalId.current = null

        console.log("timer Reset to 0")
    }
  return (
    <div>
        <h2>{timer}</h2>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      
    </div>
  )
}

export default Bonus
