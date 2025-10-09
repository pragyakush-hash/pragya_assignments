// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { todoListData } from "../constant/dummy";

// const Todo = () => {
//   const [data, setData] = useState(todoListData);
//   const [inputName, setInputName] = useState("");
//   const [inputProfile, setInputProfile] = useState("");
//   const [editValue, setEditValue] = useState(false)
//   console.log("input", inputName);
//   console.log("data", data);

//   const addTodo = () => {
//     const addItems = {
//       id: data.length + 1,
//       name: inputName,
//       profile: inputProfile,
//     };
//     setData((prev) => [...prev, addItems]);
//   };

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

//   const handleStartEdit = (id)=>{
//     setEditValue(true)
//   }

//   return (

//     <div>
//       <div>
//         <input
//           type="text"
//           value={inputName}
//           placeholder="Enter Name"
//           onChange={(e) => setInputName(e.target.value)}
//         />
//         <input
//           type="text"
//           value={inputProfile}
//           placeholder="Enter Profile"
//           onChange={(e) => setInputProfile(e.target.value)}
//         />
//         <button className="btn btn-info" onClick={()=>addTodo()}>
//           ADD
//         </button>
//       </div>
//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">Title</th>
//             <th scope="col">Description</th>
//             <th scope="col">Priority</th>
//             <th scope="col">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//       {data.length===0 && <h2 className="text-center m-5">Empty TodoItems</h2>}
//           {data.map((item) => (
//             <tr key={item.id}>
//               <th scope="row">{item.Title}</th>
//               <td>{item.Description}</td>
//               <td>{item.Priority}</td>
//               <td>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => handleDelete(item.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//               {item.id!==editValue ? <> <td>

//                 <button className="btn btn-primary" value={editValue} onClick={()=>handleStartEdit(item.id)}>Edit</button>
//               </td></>:<>
//               <td>
//                 <td><input type="text" placeholder="edit name"/></td>
//               <td><input type="text" placeholder="edit profile"/></td>
//                 <button className="btn btn-primary">Save</button>
//               </td>
//               </>}

//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Todo;

import React, { useState } from "react";
import { todoListData } from "../constant/dummy";
import "./Todo.css";
const Todo = () => {
  const [data, setData] = useState(todoListData);
  const [inputtitle, setInputTitle] = useState("")
  console.log(inputtitle)
  const [inputdescription, setInputDescription] = useState("")
  console.log(inputdescription)

  const handleAddItems = ()=>{
    const newItem = {
        title : inputtitle,
        description : inputdescription,
    }
    setData((prev)=>[...prev,newItem])
    console.log(data)
  }


  return (
    <>
      <div>
        <h1>Todo cards</h1>
      </div>
      <div className="card-add-details">
        <label>
          Add Title:- <input type="text" className="title-input" name="title" value={inputtitle} onChange={(e)=>setInputTitle(e.target.value)}/>
        </label>
        <label>
          Add Des :- <textarea placeholder="Enter description " name="description" value={inputdescription} onChange={(e)=>setInputDescription(e.target.value)} />
        </label>
        <label>
          Add Priority:-{" "}
          <select className="priority-options">
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="low">Low</option>
          </select>
        </label>
      </div>
      <button className="btn-add" onClick={handleAddItems}>Add All Details</button>
      <div></div>
      <div className="container-card">
        {data.map((item) => (
          <div
            key={`${item.Title}-${item.timestamp}`}
            className="card-body"
            style={{ width: "20rem" }}
          >
            <div className="card">
              <h2 className="card-title">{item.Title}</h2>
              <p className="card-text">{item.Description}</p>
              <h3>{item.Priority}</h3>
            </div>
            <button className="btn-delete">Delete card</button>
            <button className="btn-edit">Edit card</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;
