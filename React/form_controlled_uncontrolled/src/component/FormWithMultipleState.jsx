import React, { useRef, useState } from "react";

const FormWithMultipleState = ({ref}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAdd, setEmailAdd] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const inputAge = ref.current.value;
    console.log({
      firstName,
      lastName,
      emailAdd,
      phoneNo,
      password,
      inputAge
    });
    // if(ref.current){
    //   ref.current.value = "23"
    // }
    // console.log("age", ref.current.value);
  };
  return (
    <div className="container text-center ">
      <div className="mb-3">
        <h2>Form with using multiple state</h2>
      </div>
      <div>
        <form className="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">
              FirstName:-{" "}
              <input
                type="text"
                value={firstName}
                placeholder="enter first name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-3">
            <label>
              LastName:-{" "}
              <input
                type="text"
                value={lastName}
                placeholder="enter last name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-3">
            <label>
              EmailAdd:-{" "}
              <input
                type="email"
                value={emailAdd}
                placeholder="enter valid email"
                onChange={(e) => setEmailAdd(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-3">
            <label>
              PhoneNo:-
              <input
                type="number"
                value={phoneNo}
                placeholder="enter 10 digit no."
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-3">
            <label>
              Password:-
              <input
                type="password"
                value={password}
                placeholder="enter strong password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-3">
            <label>
              Age :- {"  "}
              <input
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

export default FormWithMultipleState;
