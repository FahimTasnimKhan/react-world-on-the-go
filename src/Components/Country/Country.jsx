import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const [Visited, setVisited] = useState(false);
  const name = country.name.common;
  const flagimg = country.flags.flags.png;
  const population = country.population.population;
  const area = country.area.area;
  const handleVisited = () => {
    setVisited(Visited ? false : true);
    handleVisitedCountries(country);
  };
  // console.log(country);
  return (
    <div className={Visited ? `country country-visited` : `country`}>
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
        {Visited ? <p>Visited</p> : <p>Not Visited</p>}
      </button>
    </div>
  );
};

export default Country;
