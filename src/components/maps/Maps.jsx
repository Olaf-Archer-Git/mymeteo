import React, { useState, useEffect, useRef } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { XYZ } from "ol/source";

const Maps = () => {
  const [map, setMap] = useState();
  const mapElement = useRef();
  const mapRef = useRef();
  mapRef.current = map;

  useEffect(() => {
    const initialMap = new Map({
      target: mapElement.current,
      view: new View({
        center: [50.45, 30.52],
        zoom: 5,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new TileLayer({
          source: new XYZ({
            url: `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=fcd02eb8abb66b38ec530d74cda61191`,
          }),
        }),
      ],
    });
    setMap(initialMap);
  }, []);
  return (
    <div
      style={{ height: "80vh", width: "100%", overflow: "hidden" }}
      ref={mapElement}
    />
  );
};

export default Maps;
