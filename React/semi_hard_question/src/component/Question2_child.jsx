import React, { useState } from 'react'

const Question2_child = ({pCount,incrementParent,updateChildFromParent}) => {
    const [cCount, setCCount] = useState(0)

  return (
   <div className="card">
      <button onClick={incrementParent}>
        Parent Count is {pCount} (Click to update from Child)
      </button>

      <button onClick={() => updateChildFromParent(setCCount)}>
        Child Count is {cCount} (Click to update from parent)
      </button>
    </div>
  )
}

export default Question2_child
