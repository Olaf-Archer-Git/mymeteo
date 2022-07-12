import React, { useState } from "react";
import chevron from "../../assets/chevron.svg";

import "./Week.scss";

const data = [
  {
    title: "monday",
    answer: "atmosphere and is scattered in all directions",
  },
  {
    title: "tusday",
    answer: "Because I was born like that",
  },
  {
    title: "wednesday",
    answer: "Because I was born like that",
  },
  {
    title: "tursday",
    answer: "atmosphere and is scattered in all directions",
  },
  {
    title: "friday",
    answer:
      "atmosphere and is scattered in all directions atmosphere atmosphere and is scattered in all directions atmosphere",
  },
  {
    title: "suterday",
    answer:
      "atmosphere and is scattered in all directions atmosphere atmosphere and is scattered in all directions atmosphere",
  },
  {
    title: "sunday",
    answer:
      "atmosphere and is scattered in all directions atmosphere atmosphere",
  },
];

const Week = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (index) => {
    return selected === index ? setSelected(null) : setSelected(index);
  };

  return (
    <section className="week">
      <div className="accordion">
        {data.map((item, index) => {
          return (
            <div key={index} className="accordion__item">
              <div
                className="accordion__title"
                onClick={() => {
                  toggle(index);
                }}
              >
                <p>{item.title}</p>
                <img
                  src={chevron}
                  className={`accordion__icon ${
                    selected === index ? "collapsed" : ""
                  }`}
                />
              </div>
              <div
                className={`accordion__answer ${
                  selected === index ? "show" : ""
                }`}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Week;
