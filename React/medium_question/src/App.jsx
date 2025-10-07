import React, { useState } from "react";
import UseCard_question1 from "./component/UseCard_question1";
import Question2_child from "./component/Question2_child";
import Question3_child from "./component/Question3_child";
import Question4 from "./component/Question4";
import Question5 from "./component/Question5";

const App = () => {
  const [users, setUsers] = useState([
    { name: "pragya", age: 23 },
    { name: "vaibhavi", age: 24 },
    { name: "anuja", age: 22 },
  ]);
  const number = 25;
  const [num, setNum] = useState(number);
  const [msg, setMsg] = useState("Initial message from parent ")

  const updateParentsMsg = (newMsg)=>{
    setMsg(newMsg)
  }
  return (
    <div>
      {users.map((user)=>(<UseCard_question1 user={user}/>))}
      <button onClick={() => setNum((prev) => prev + 1)}>Increase num +</button>
      <Question2_child number={num} />
      <h4>{msg}</h4>
      <Question3_child updateParentsMsg={updateParentsMsg}/>
      <Question4/>
      <Question5/>
    </div>
  );
};

export default App;
