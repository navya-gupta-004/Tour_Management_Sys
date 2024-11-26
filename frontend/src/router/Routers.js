import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./../pages/Home";
import TourDetails from "./../pages/TourDetails";
import Tours from "./../pages/Tours";
import SearchResultList from "./../pages/SearchResultList";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import ThankYou from "../pages/ThankYou";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
};
export default Routers;
