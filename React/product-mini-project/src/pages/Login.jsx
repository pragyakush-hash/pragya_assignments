import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import './login.css'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate("/")
    } else {
      console.log("invalid user password")
      alert("Invalid username and passwoed");
      setUsername("")
      setPassword("")
    }
  };

  return (
    <div className="login-container">
          <form onSubmit={handleSubmit} className="page--login">
      <h1>Login</h1>
      <div className="input-group">
        <label>UserName: -       <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /></label>
      </div>
      <div className="input-group">
        <label>Paaword:-     <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /></label>
      </div>

  
      <button type="submit">Login</button>
    </form>

    </div>

  );
};

export default Login;
