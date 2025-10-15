import { act, createContext, useEffect, useReducer, useState } from "react";

export const AuthContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "logout":
      return {
        ...state,
        isAuthenticated: false,
      };

    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "FETCH_PRODUCTS_ID":
      return {
        ...state,
        product_id: action.payload,
      };

    case "FETCH_PRODUCTS_ID_EDIT":
      return {
        ...state,
        product_id_edit: action.payload
      };
    case "FETCH_PRODUCTS_ID_UPDATE":
      return {
        ...state,
        product_id_edit: {
          ...state.product_id_edit,
          [action.payload.name]: action.payload.value,
        },
      };
  }
};

const initialState = {
  isAuthenticated: false,
  user: {},
  products: [],
  product_id: {},
  product_id_edit: {},
  product_id_update: {},
};

export const AuthProvider = ({ children }) => {
  //   const [user, setUser] = useState(null);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (storedUsername === "admin" && storedPassword === "1234") {
      //   setUser({ username: storedUsername, password: storedPassword });
      // setIsAuthenticated(true);
      dispatch({ type: "store" });
    }
  }, []);

  const login = (username, password) => {
    if (username === "admin" && password === "1234") {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      // setIsAuthenticated(true);

      dispatch({ type: "login", payload: { username, password } });
      return true;
    }
    return false;
  };
  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    // setIsAuthenticated(false);
    dispatch({ type: "logout" });
  };
  return (
    <AuthContext.Provider value={{ state, dispatch, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
