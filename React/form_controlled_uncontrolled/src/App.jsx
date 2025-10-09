import React, { useRef } from 'react'
import FormWithMultipleState from './component/FormWithMultipleState'
import FormWithSingalState from './component/FormWithSingalState'
import Todo from './component/Todo';

const App = () => {

  const ageInputRef = useRef(null);

  return (
    <div>
      
      {/* <FormWithMultipleState ref={ageInputRef} /> */}
      {/* <FormWithSingalState ref={ageInputRef}/> */}
      <Todo/>
    </div>
  )
}

export default App
