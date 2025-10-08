import React, { useState } from "react";
const todo = [
  {
    id: 1,
    name: "pragya",
  },
  {
    id: 2,
    name: "Vaibhavi",
  },
  {
    id: 3,
    name: "Anuja",
  },
  {
    id: 4,
    name: "Aditya",
  },
  {
    id: 5,
    name: "gautam",
  },
  {
    id: 6,
    name: "xyzy",
  },
  {
    id: 7,
    name: "yyxx",
  },
  {
    id: 8,
    name: "xxzz",
  },
];
const Semi_hard1 = () => {
  const [data, setData] = useState(todo);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    const newItem = {
      id: Date.now(),
      name: input,
    };
    if (input.trim("")) {
      setData((prev) => [...prev, newItem]);
      setInput("");
    }
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  return (
    <div>
      <h2>Add todo and delete</h2>
      <input
        type="text"
        placeholder="enter todo here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        style={{ background: "green", margin: "4px" }}
        onClick={handleAdd}
      >
        Add
      </button>
      {data.length === 0 ? <h3>NO TODO FOUND PLZ ADD </h3>: null}
      {data.map((item) => (
        <li key={item.id}>
          {item.id} : - {item.name}
          <button
            onClick={() => handleDelete(item.id)}
            style={{ background: "red", margin: "5px" }}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default Semi_hard1;
