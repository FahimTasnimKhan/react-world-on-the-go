import React, { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ CountriesPromise }) => {
  const countriesData = use(CountriesPromise);
  const countries = countriesData.countries;

  return (
    <div className="container">
      <p className="heading-center">No of countries = {countries.length}</p>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
