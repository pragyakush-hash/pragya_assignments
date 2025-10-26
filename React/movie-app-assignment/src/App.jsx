import React, { Profiler } from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import PrivateRoute from "./privateRoute/PrivateRoute";
import MovieDetails from "./pages/MovieDetails";
import MovieListPage from "./pages/MovieListPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Movies />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/moviedetails/:id" element={<MovieDetails />} />
            <Route path="/movie_list" element={<MovieListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
