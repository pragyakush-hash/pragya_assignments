import React, { useEffect } from 'react'

const Medium3 = () => {
    useEffect(()=>{
        alert("your componenrt is mounted")
        return(()=>{
            console.log("your componnet is unmounted")
        })
    },[])
  return (
    <div>
      Medium question 3
    </div>
  )
}

export default Medium3
