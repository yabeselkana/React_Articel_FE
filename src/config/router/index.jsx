import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Detail from "../../pages/Detail";
import Login from "../../pages/Auth/login";
import Register from "../../pages/Auth/register";
import Profile from "../../pages/Profile";
import MyArticel from "../../pages/MyArticel";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profile/:id" element={<Profile />} />
          <Route path="/MyArticel/:id" element={<MyArticel />} />
          <Route path="/Detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
