import React, { useState } from "react";
const fruits = ["Apple", "Banana", "Orange", "Mango", "Strawberry"];
const Question1 = () => {
  return (
    <div>
      {fruits.map((list) => (
        <li key={list}>{list}</li>
      ))}
    </div>
  );
};

export default Question1;
