import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import Home from "./components/home/Home";
// import Week from "./components/week/Week";
// import Error from "./components/error/Error";
import Map from "./components/map/Map";
// import Login from "./components/login/Login";

import "./App.scss";

const App = () => {
  return (
    <main className="App">
      <Header />
      {/* <Home /> */}
      {/* <Week /> */}
      {/* <Error /> */}
      <Map />
      {/* <Login /> */}
      <Footer />
    </main>
  );
};

export default App;
