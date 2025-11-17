import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "./authSlice";
import { useEffect } from "react";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({});
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated === true) navigate("/");
  }, [isAuthenticated, navigate]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginData));
    console.log(loginData);
  };

  return (
    <div className="m-30">
      <div className="">
        <h1 className="text-center text-3xl font-bold text-center text-amber-700 mb-5">
          Welcome, Please Sign In!
        </h1>
        <hr />
        <div className="d flex items-center justify-around">
          <div className="mt-10">
            <div className="w-125 h-85 bg-white rounded-lg shadow dark:border  dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-center text-2xl font-bold text-center text-amber-700 mb-5">
                  New Customer
                </h1>
                <hr />
                <p>
                  By creating an account on our website, you will be able to
                  shop faster, be up to date on an order's status, and keep
                  track of the orders you have previously made.
                </p>
                <button
                  type="submit"
                  className=" mt-17 bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded text-center"
                >
                  <Link to="/email_verification">Register</Link>
                  {/* <Link to="/register">Register</Link> */}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="mt-10">
                <div className="w-130 bg-white rounded-lg shadow dark:border  dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-center text-2xl font-bold text-center text-amber-700 mb-5">
                      Returning Customer
                    </h1>
                    <form
                      className="space-y-4 md:space-y-6"
                      onSubmit={handleSubmit}
                    >
                      <div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={loginData.email || ""}
                          onChange={handleOnChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=" Email :-name@company.com"
                          required=""
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          value={loginData.password || ""}
                          onChange={handleOnChange}
                          placeholder="••••••••"
                          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required=""
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="remember"
                              aria-describedby="remember"
                              type="checkbox"
                              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                              required=""
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label className="text-gray-500 dark:text-gray-300">
                              Remember me
                            </label>
                          </div>
                        </div>
                        <Link
                          to=""
                          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <button
                        type="submit"
                        className="bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded text-center"
                      >
                        LogIn
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
