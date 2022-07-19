import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Week from "./pages/week/Week";
// import Error from "./pages/error/Error";
import Map from "./pages/map/Map";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";

import "./App.scss";

const App = () => {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/week" element={<Week />} />
        <Route path="/map" element={<Map />} />
        {/* <Error /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
