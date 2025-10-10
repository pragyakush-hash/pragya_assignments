import React, { useState } from "react";
import { todoListData } from "../constant/dummy";
import "./Todo.css";
const Todo = () => {
  const [data, setData] = useState(todoListData);
  const [inputtitle, setInputTitle] = useState("");
  // console.log(inputtitle);
  const [inputdescription, setInputDescription] = useState("");
  const [selectpriority, setSelectPriority] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editPriority, setEditPriority] = useState("");
  // console.log(inputdescription);

  const handleAddItems = () => {
    const newItem = {
      Id: Date.now(),
      Title: inputtitle,
      Description: inputdescription,
      Priority: selectpriority,
    };
    if (inputtitle.trim(" ")) {
      setData((prev) => [...prev, newItem]);
      setInputTitle("");
      setInputDescription("");
      setSelectPriority("");
      console.log(data);
    }
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.Id !== id));
  };
  const handleStartEditing = (id) => {
    const editTodo = data.find((item) => item.Id === id);
    setIsEditing(id);
    setEditTitle(editTodo.Title);
    setEditDescription(editTodo.Description);
    setEditPriority(editTodo.Priority);
  };

  const handleSaveItem = (id) => {
    const saveItem = data.map((item) =>
      item.Id === id
        ? {
            ...item,
            Title: editTitle,
            Description: editDescription,
            Priority: editPriority,
          }
        : item
    );
    setData(saveItem);
    setIsEditing(null);
  };

  return (
    <>
      <div>
        <h1>Todo cards</h1>
      </div>
      <div className="card-add-details">
        <label>
          Add Title:-{" "}
          <input
            type="text"
            className="title-input"
            name="title"
            value={inputtitle}
            onChange={(e) => setInputTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Add Des :-{" "}
          <textarea
            placeholder="Enter description "
            name="description"
            value={inputdescription}
            onChange={(e) => setInputDescription(e.target.value)}
          />
        </label>
        <label>
          Add Priority:-{" "}
          <select
            className="priority-options"
            value={selectpriority}
            onChange={(e) => setSelectPriority(e.target.value)}
          >
            <option value="">Select</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="low">Low</option>
          </select>
        </label>
      </div>
      <button className="btn-add" onClick={handleAddItems}>
        Add All Details
      </button>
      <div></div>
      <div className="container-card">
        {data.map((item) => (
          <div key={item.Id} className="card-body" style={{ width: "20rem" }}>
            <div className="card">
              {isEditing !== item.Id ? (
                <>
                  <h2 className="card-title">{item.Title}</h2>
                  <p className="card-text">{item.Description}</p>
                  <h3>{item.Priority}</h3>
                  <button
                    className="btn-edit"
                    onClick={() => handleStartEditing(item.Id)}
                  >
                    Edit card
                  </button>
                </>
              ) : (
                <>
                  <h2 className="card-title">
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                    />
                  </h2>
                  <p className="card-text">
                    <textarea
                      name=""
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                    ></textarea>
                  </p>
                  <h3>
                    <select
                      className="priority-options"
                      value={editPriority}
                      onChange={(e) => setEditPriority(e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="low">Low</option>
                    </select>
                  </h3>
                  <button
                    className="btn-save"
                    onClick={() => handleSaveItem(item.Id)}
                  >
                    Save card
                  </button>
                </>
              )}
              <button
                className="btn-delete"
                onClick={() => handleDelete(item.Id)}
              >
                Delete card
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;