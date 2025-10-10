import React, { useRef, useState } from "react";
import FormWithMultipleState from "./component/FormWithMultipleState";
import FormWithSingalState from "./component/FormWithSingalState";
import Todo from "./component/Todo";
import CustomInputControlled from "./component/CustomInputControlled";
import CustomInputUncontrolled from "./component/CustomInputUncontrolled";

const App = () => {
  const ageInputRef = useRef(null);
  const [formData, setFormData] = useState({});

  const handleBeforeUpdateCallback = (e) => {
    console.log(e );
  };

  const handleAfterUPDATECallback = (e) => {
    // console.log(`After change for ${fieldName}: New value - ${newValue}`);
    // const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [ageInputRef.current.name]: ageInputRef.current.value,
    });
    console.log("form submittes", formData);
  };

  return (
    <div>
      <FormWithMultipleState ref={ageInputRef} />
      {/* <FormWithSingalState ref={ageInputRef}/> */}
      {/* <Todo/> */}
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label>
            FirstName:
            <CustomInputControlled
              handleBeforeChange={handleBeforeUpdateCallback}
              handleAfterChange={handleAfterUPDATECallback}
              // onChange={handleInputChange}
              placeholder="Enter FirstName..."
              type="text"
              name="firstName"
              value={formData.firstName}
            />
          </label>
        </div>
        <div>
          <label>
            LastName:
            <CustomInputControlled
              handleBeforeChange={handleBeforeUpdateCallback}
              handleAfterChange={handleAfterUPDATECallback}
              // onChange={handleInputChange}
              placeholder="Enter LastName..."
              type="text"
              name="lastName"
              value={formData.lastName}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <CustomInputControlled
              handleBeforeChange={handleBeforeUpdateCallback}
              handleAfterChange={handleAfterUPDATECallback}
              // onChange={handleInputChange}
              placeholder="Enter Email..."
              type="email"
              name="email"
              value={formData.email}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <CustomInputControlled
              handleBeforeChange={handleBeforeUpdateCallback}
              handleAfterChange={handleAfterUPDATECallback}
              // onChange={handleInputChange}
              placeholder="Enter Password..."
              type="password"
              name="password"
              value={formData.password}
            />
          </label>
        </div>
        <div>
          <label>
            Age:-
            <CustomInputUncontrolled
              ref={ageInputRef}
              type="number"
              name="age"
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
};

export default App;
