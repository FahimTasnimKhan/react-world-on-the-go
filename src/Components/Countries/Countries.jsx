import React, { use } from "react";

const Countries = ({ CountriesPromise }) => {
  const countriesData = use(CountriesPromise);
  const countries = countriesData.countries;
  console.log(countries);
  countries.map((country) => console.log(country));

  return <div></div>;
};

export default Countries;
