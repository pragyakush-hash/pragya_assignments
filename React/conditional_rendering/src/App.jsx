import React from 'react'
import Question1 from './component/Question1'
import Question2 from './component/Question2'
import Question3 from './component/Question3'
import Medium1 from './component/Medium1'
import Medium3 from './component/Medium3'
import Semi_hard1 from './component/Semi_hard1'
import Semi_hard2 from './component/Semi_hard2'
import Semi_hard3 from './component/Semi_hard3'
import Bonus from './component/Bonus'
import Medium2 from './component/Medium2'

const App = () => {
  return (
    <div>
      <Question1/>
      <Question2/>
      <Question3/>
      <Medium1/>
      <Medium2/>
      <Medium3/>
      <Semi_hard1/>
      <Semi_hard2/>
      <Semi_hard3/>
      <Bonus/>
    </div>
  )
}

export default App
