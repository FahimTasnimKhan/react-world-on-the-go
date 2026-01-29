import React from "react";
import "./Country.css";

const Country = ({ country }) => {
  const name = country.name.common;
  const flagimg = country.flags.flags.png;
  const population = country.population.population;
  const area = country.area.area;
  const handleVisited = () => {
    console.log("Visited");
  };
  // console.log(country);
  return (
    <div className="country">
      <div className="image">
        <img src={flagimg} alt={country.flags.alt} />
      </div>
      <h3>Name:{name}</h3>
      <p>Population:{population}</p>
      <p>Area :{area}</p>
      {population > 30000 ? (
        <p>Country has huge population</p>
      ) : (
        <p>Country has few population</p>
      )}
      <button className="btn" onClick={handleVisited}>
        Not Visited
      </button>
    </div>
  );
};

export default Country;
