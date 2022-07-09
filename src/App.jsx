import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import Home from "./components/home/Home";
import Week from "./components/week/Week";

import "./App.scss";

const App = () => {
  return (
    <main className="App">
      <Header />
      {/* <Home /> */}
      <Week />
      <Footer />
    </main>
  );
};

export default App;
