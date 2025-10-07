import React, { useState } from "react";

const Question4 = () => {
  const [input, setInput] = useState("");

  const handleInput = () => {
    console.log(input);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="enter text here"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleInput}>Console Input value</button>
    </div>
  );
};

export default Question4;
