import React, { useRef, useState } from "react";
import "./form.css";

const FormWithMultipleState = ({ ref }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAdd, setEmailAdd] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const validate = () => {
    let temErrorfirstName = "";
    let temErroremailAdd = "";
    let temErrorphone = "";
    let temErrorpassword = "";
    if (!firstName)
      temErrorfirstName = " Name should not empty Required, min 2 chars";
    if (!emailAdd) {
      temErroremailAdd = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(emailAdd)) {
      temErroremailAdd = "Email is invalid.";
    }
    console.log(typeof phoneNo);
    if (phoneNo.length < 10) temErrorphone = "10 digit number is required";
    if (password.length < 6)
      temErrorpassword = "6 charachectar password is required";
    setErrorName(temErrorfirstName);
    setErrorEmail(temErroremailAdd);
    setErrorPhone(temErrorphone);
    setErrorPassword(temErrorpassword);
    console.log("hello error", temErroremailAdd, temErrorfirstName);
    console.log("hello password", temErrorpassword);
    console.log("hello phone", temErrorphone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputAge = ref.current.value;
    console.log({
      firstName,
      lastName,
      emailAdd,
      phoneNo,
      password,
      inputAge,
    });
    if (validate()) {
      console.log("fprm submitees");
      // Process formData here
    }
    // if(ref.current){
    //   ref.current.value = "23"
    // }
    // console.log("age", ref.current.value);
  };
  return (
    <div className="multiple-form ">
      <div className="mb-3">
        <h2>Form with using multiple state</h2>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit} className="form-input">
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
            {errorName ? <p className="error-message">{errorName}</p> : ""}
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
            {errorEmail ? <p className="error-message">{errorEmail}</p> : ""}
          </div>
          <div className="mb-3">
            <label>
              PhoneNo:-
              <input
                className="input-phone"
                type="number"
                value={phoneNo}
                placeholder="enter 10 digit no."
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </label>
            {errorPhone ? <p className="error-message">{errorPhone}</p> : ""}
          </div>
          <div className="mb-3">
            <label>
              Password:-
              <input
                className="input-password"
                type="password"
                value={password}
                placeholder="enter strong password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            {errorPassword ? (
              <p className="error-message">{errorPassword}</p>
            ) : (
              ""
            )}
          </div>
          <div className="mb-3">
            <label>
              Age :- {"  "}
              <input
                type="number"
                placeholder="enter your age"
                className="input-age"
                ref={ref}
              />
            </label>
          </div>
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormWithMultipleState;
