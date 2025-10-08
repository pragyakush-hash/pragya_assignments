import React, { useEffect, useRef, useState } from "react";

const Semi_hard2 = () => {
  const [count, setCount] = useState(0);
  let id = useRef(null);

  useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("unmounting....");
      clearInterval(id.current);
    };
  }, []);

  const handleStart = () => {
    if (!id.current) {
      id.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
      console.log("timer stared....");
    }
  };
  const handleStop = () => {
    clearInterval(id.current);
    id.current = null;
    console.log("timer stopped!");
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Semi_hard2;
