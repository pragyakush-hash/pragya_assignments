import React, { useRef, useState } from "react";

const Medium2 = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  const handleFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>increase+</button><br/>

      <input type="text" ref={inputRef} />
      <button onClick={handleFocusInput}>Click Me!!</button>
    </div>
  );
};

export default Medium2;
