import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //   const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (storedUsername === "admin" && storedPassword === "1234") {
      //   setUser({ username: storedUsername, password: storedPassword });
      setIsAuthenticated(true);
    }
  }, []);

  const login = (username,password) => {
    if (username === "admin" && password === "1234") {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };
  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
