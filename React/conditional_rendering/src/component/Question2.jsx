import React, { useState } from 'react'

const fruits = ["Apple", "Banana", "Orange", "Mango", "Strawberry"];
const result = fruits.map((list) => (
        <div style={{ border: '1px solid black' }} key={list}>{list}</div>
      ))
const Question2 = () => {
    const [show, setShow] = useState(true)
  return (
    <div>
      {show ? result : ""}
      <button onClick={()=>setShow(!show)}>{show ? "Hide":"Show"}</button>
    </div>
  );
};

export default Question2
