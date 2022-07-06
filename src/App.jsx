import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import "./App.scss";

const App = () => {
  return (
    <main className="App">
      <Header />
      <div className="wrap">
        <Home />
      </div>
      <Footer />
    </main>
  );
};

export default App;
