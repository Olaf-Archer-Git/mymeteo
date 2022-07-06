import React from "react";
import search from "../../assets/search.svg";
import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="home__container">
        <div className="home__search">
          <input
            type="text"
            className="home__input"
            placeholder="What are you looking for?"
          />
          <button type="submit" className="home__btn">
            <img className="home__icon" src={search} />
          </button>
        </div>
      </div>

      <div className="home__content">
        <h1 className="home__title">Kyiv.Ukraine</h1>
        <p className="home__item">
          temperature<span>25</span>&#8451;
        </p>
        <p className="home__item">
          feels like<span>25</span>
        </p>
        <p className="home__item">
          wind speed<span>25</span>
        </p>
        <p className="home__item">
          temp max<span>25</span>
        </p>
        <p className="home__item">
          temp min<span>25</span>
        </p>
        <p className="home__item">clouds describe</p>
      </div>
    </section>
  );
};

export default Home;
