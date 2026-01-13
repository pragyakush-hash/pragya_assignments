// Nested file folder structure
//exand and collaspes

import React, { useState } from "react";
import json from "./data.json";
import "./App.css";

const List = ({ list }) => {
  const [isExpand, setIsExpand] = useState({});
  return (
    <div className="container">
      {list.map((node) => (
        <div key={node.id}>
          {node.isFolder ? (
            <span
              onClick={() =>
                setIsExpand((prev) => ({
                  ...prev,
                  [node.name]: !prev[node.name],
                }))
              }
            >
              {isExpand?.[node.name] ? "-" : "+"}{" "}
            </span>
          ) : (
            ""
          )}
          <span>{node.name}</span>
          {isExpand?.[node.name] && node?.children ? (
            <List list={node.children} />
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [data, setData] = useState(json);
  console.log(data, "data");
  return (
    <div>
      <h1>File/Folder Explorer</h1>
      <List list={data} />
    </div>
  );
};

export default App;
