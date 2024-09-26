import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./../pages/Home";
import TourDetails from "./../pages/TourDetails";
import Tours from "./../pages/Tours";
import SearchList from "./../pages/SearchList";
import Login from "./../pages/Login";
import Register from "./../pages/Register";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/searchList" element={<SearchList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
export default Routers;
