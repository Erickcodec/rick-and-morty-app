import React from "react";
import "./index.css";

function LocationShip({ label, content }) {
  return (
    <div className="location-ship">
      <h4 className="location-ship__label">{label}</h4>
      <p className="location-ship__content">{content}</p>
    </div>
  );
}

function LocationInfo({ value }) {
  return (
    <div className="location-info container">
      <LocationShip label="nombre" content={value.name} />
      <LocationShip label="tipo" content={value.type} />
      <LocationShip label="dimension" content={value.dimension} />
      <LocationShip label="poblacion" content={value.residents.length} />
    </div>
  );
}

export default LocationInfo;
