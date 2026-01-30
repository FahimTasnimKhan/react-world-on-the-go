import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ CountriesPromise }) => {
  const countriesData = use(CountriesPromise);
  const countries = countriesData.countries;
  const [visitedCountries, setvisitedCountries] = useState([]);
  const handleVisitedCountries = (country) => {
    console.log("Country Visited Clicked", country);
    const newVisitedcountries = [...visitedCountries, country];
    setvisitedCountries(newVisitedcountries);
  };
  return (
    <div className="container">
      <p className="heading-center">No of countries = {countries.length}</p>
      <p className="heading-center">
        Total No of Countries Visited:{visitedCountries.length}
      </p>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3} className="heading-center">
            {country.name.common}
          </li>
        ))}
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
