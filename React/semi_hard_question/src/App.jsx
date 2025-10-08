import React, { useEffect, useState } from 'react'
import Question1 from './component/Question1'
import Question2_child from './component/Question2_child'
import Button_q3 from './component/Button_q3'

const App = () => {
  const [pCount, setPCount] = useState(0)

  const incrementParent = () => {
    setPCount(prev => prev + 1)
  }

  const updateChildFromParent = (setCCount) => {
    setCCount(prev => prev + 2)
  }
const [text, setText] = useState("Reuseable Button")
const [color, setColor] = useState("pink")
const handleOnClick = ()=>{
  alert("You clicked the button!")
}
  return (
    <>
    <Question1/>
      <Question2_child
        pCount={pCount}
        incrementParent={incrementParent}
        updateChildFromParent={updateChildFromParent}
      />
      <Button_q3 text={text} handleOnClick={handleOnClick} color={color}/>
    </>
  )
}

export default App
