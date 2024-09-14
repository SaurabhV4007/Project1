import React from 'react';
import { useParams } from 'react-router-dom';
import countriesData from '../data/countries.json';
import './ResultPage.css';

const ResultPage = () => {
  const { countryName } = useParams();
  const country = countriesData.find(c => c.country === countryName);

  if (!country) {
    return <div className="result-container">Country not found.</div>;
  }

  return (
    <div className="result-container">
      <h2>{country.country}</h2>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Official Language:</strong> {country.official_language}</p>
      <p><strong>Currency:</strong> {country.currency}</p>
    </div>
  );
};

export default ResultPage;
