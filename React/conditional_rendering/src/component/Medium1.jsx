import React, { useState } from "react";
const students = ["Pragya", "Vaibhavi", "Anuja", "Gautam", "Aditya"];

const Medium1 = () => {
  const [data, setData] = useState(students);
  const [input, setInput] = useState("");
  const handleAdd = () => {
    const newItem = input;
    if(input.trim()){
    setData((prev)=>[...prev,newItem]);
    setInput("")
    };
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add new student"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      {data.map((student) => (
        <li key={student}>{student}</li>
      ))}
    </div>
  );
};

export default Medium1;
