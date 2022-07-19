import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login__wrap">
        <div className="login__content">
          <h2 className="login__title">
            wellcome back <span>log in</span>
          </h2>
          <input className="login__input" type="email" placeholder="e-mail" />

          <input
            className="login__input"
            type="password"
            placeholder="password"
          />
          <div className="login__btn">log in</div>

          <div className="login__text">
            don&apos;t have an account?
            <a href="/signup" className="login__link">
              sign up
            </a>
          </div>
        </div>
        <div className="login__container"></div>
      </div>
    </div>
  );
};

export default Login;
