import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/denmark/denmark-counties.json";

const filterColor = (text) => {
  if (
    text.rsmKey.includes("12") ||
    text.rsmKey.includes("8") ||
    text.rsmKey.includes("10") ||
    text.rsmKey.includes("2")
  ) {
    return "#b5b5de";
  } else return "grey";
};

const findCoordinates = (array)=>{
  console.log(array.map(text => text))
}
const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      viewBox="480 -680 100 100"
      projectionConfig={{
        scale: [1000],
      }}
    >
      <ZoomableGroup center={[0, 0]} zoom={1}>
        <Geographies geography={geoUrl}>
          {({ geographies }) => {
            const sjaelland = { coordinates: ["11.721498", "55.463252"] };
            return geographies.map((geo) => (
              console.log(geo.svgPath, geo.geometry.coordinates),
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={filterColor(geo)}
                // fill={findCoordinates(geo.geometry.coordinates)}
                // fill={sjaelland ? "red" : "blue"}
                stroke="#D6D6DA"
                strokeWidth={0.1}
              />
            ));
          }}
        </Geographies>
        {/* <Marker coordinates={["11.721498", "55.463252"]}>
          <circle r={1} fill="blue" stroke="#fff" strokeWidth={0.1} />
        </Marker> */}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;
