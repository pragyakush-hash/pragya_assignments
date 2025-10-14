import React, { useRef, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

  const validUser = {
    username: "admin",
    password: "1234",
  };
const Login = () => {
  // const [userName, setUserName] = useState("")
  // const [password, setPassword] = useState("")

  // const usernameRef = useRef(null);
  // const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const enterUsername = usernameRef.current.value;
    console.log(enterUsername, "enteruser");
    const enterPassword = passwordRef.current.value;
    console.log("enter password", enterPassword);

    if (
      enterUsername === validUser.username &&
      enterPassword === validUser.password
    ) {
      localStorage.setItem("username", enterUsername);
      localStorage.setItem("password", enterPassword);
      navigate("/");
    } else {
      alert("Invalid username or password");
      console.log("Invalid username and password");
    }
  };
  return (
    <div className="">
      <form className="page--login" onSubmit={handleSubmit}>
        <label>
          {" "}
          Username:-{" "}
          <input
            placeholder="enter usernmae"
            type="text"
            id="username"
            ref={usernameRef}
          />
        </label>
        <label>
          {" "}
          Password:-{" "}
          <input
            placeholder="enter password"
            type="password"
            id="password"
            ref={passwordRef}
          />
        </label>
        <button type="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
