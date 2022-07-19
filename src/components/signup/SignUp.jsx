import React from "react";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <div className="signUp">
      <div className="signUp__wrap">
        <div className="signUp__container"></div>
        <div className="signUp__content">
          <h2 className="signUp__title">
            sign up to my<span>meteo</span>
          </h2>
          <input className="signUp__input" type="email" placeholder="e-mail" />
          <input
            className="signUp__input"
            type="password"
            placeholder="password"
          />
          <input
            className="signUp__input"
            type="password"
            placeholder="confirm password"
          />
          <div className="signUp__btn">create account</div>
          <div className="signUp__text">
            already a member?
            <a href="/login" className="signup__link">
              log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
