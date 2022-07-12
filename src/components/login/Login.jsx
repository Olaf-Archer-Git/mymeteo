import React from "react";
import { useState } from "react";

import "./Login.scss";

const Login = () => {
  const [text, setText] = useState("login");
  const [active, setActive] = useState(false);

  const toggler = () => {
    text === "login" ? setText("button") : setText("login");
  };

  const swit = () => {
    setActive(!active);
  };

  return (
    <div className="login">
      <div
        onClick={() => {
          toggler();
          swit();
        }}
        className={`active ${active ? "disactive" : ""}`}
      >
        {text}
      </div>
    </div>
  );
};

export default Login;
