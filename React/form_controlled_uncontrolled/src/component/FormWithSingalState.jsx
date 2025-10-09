import React, { useState } from "react";

const FormWithSingalState = ({ref}) => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    
   const {name,value} = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {...form,age:ref.current ? ref.current.value : ""}
    console.log("formData", finalData);
  };
  return (
    <div className="container text-center ">
      <div className="mb-3">
        <h2>Form with using singal state</h2>
      </div>
      <div>
        <form className="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">
              FirstName:-{" "}
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                placeholder="enter first name"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-3">
            <label>
              LastName:-{" "}
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                placeholder="enter last name"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-3">
            <label>
              EmailAdd:-{" "}
              <input
                type="email"
                name="emailAdd"
                value={form.emailAdd}
                placeholder="enter valid email"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-3">
            <label>
              PhoneNo:-
              <input
                type="number"
                name="phoneNo"
                value={form.phoneNo}
                placeholder="enter 10 digit no."
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-3">
            <label>
              Password:-
              <input
                type="password"
                name="password"
                value={form.password}
                placeholder="enter strong password"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-3">
            <label>
              Age :- {"  "}
              <input
              name="age"
                type="number"
                placeholder="enter your age"
                className="ml-3"
                ref={ref}
              />
            </label>
          </div>
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormWithSingalState;
