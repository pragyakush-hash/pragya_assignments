import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Question1 from './component/Question1'
import Welcome_question2 from './component/Welcome_question2'
import Question3 from './component/Question3'
import Question4 from './component/Question4'

function App() {

  return (
  <div>
   <Question1/>
   <Welcome_question2 name="pragya"/>
   <Welcome_question2 name="vaibhavi"/>
   <Welcome_question2 name="anuja"/>
   <Question3/>
   <Question4/>
  </div>
  )
}

export default App
