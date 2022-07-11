import React from "react";
import { fromLonLat } from "ol/proj";
import { RMap, ROSM, RLayerTile } from "rlayers";

import "ol/ol.css";
import "rlayers/control/layers.css";
import "./Map.scss";

const center = fromLonLat([30.5234, 50.4501]);
const Map = () => {
  return (
    <div className="map">
      <div
        className="map__btn"
        onClick={() => {
          console.log("hello");
        }}
      >
        temp
      </div>
      <div className="map__clouds">
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
      <div className="map__temp">
        <RMap
          width={"100%"}
          height={"81vh"}
          initial={{ center: center, zoom: 3 }}
        >
          <ROSM />
          <RLayerTile url="https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=fcd02eb8abb66b38ec530d74cda61191" />
        </RMap>
      </div>
    </div>
  );
};

export default Map;
