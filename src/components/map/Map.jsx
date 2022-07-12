import React, { useState } from "react";
import { fromLonLat } from "ol/proj";
import { RMap, ROSM, RLayerTile } from "rlayers";
import "ol/ol.css";
import "rlayers/control/layers.css";
import "./Map.scss";

const Map = () => {
  const [active, setActive] = useState(false);
  const [text, setText] = useState("temp");

  const toggler = () => {
    active === true ? setActive(false) : setActive(true);
  };

  const button = () => {
    text === "temp" ? setText("clouds") : setText("temp");
  };

  const center = fromLonLat([30.5234, 50.4501]);
  return (
    <div className="map">
      <div
        className="map__btn"
        onClick={() => {
          button();
          toggler();
        }}
      >
        {text}
      </div>
      <div>
        {!active ? (
          <div>
            <RMap
              width={"100%"}
              height={"81vh"}
              initial={{ center: center, zoom: 5 }}
            >
              <ROSM />
              <RLayerTile url="https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=fcd02eb8abb66b38ec530d74cda61191" />
              <RLayerTile url="https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=fcd02eb8abb66b38ec530d74cda61191" />
            </RMap>
          </div>
        ) : (
          <div>
            <RMap
              width={"100%"}
              height={"81vh"}
              initial={{ center: center, zoom: 5 }}
            >
              <ROSM />
              <RLayerTile url="https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=fcd02eb8abb66b38ec530d74cda61191" />
            </RMap>
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;
