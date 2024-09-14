import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';
import countriesData from '../data/countries.json';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 0) {
      const lowerQuery = query.toLowerCase();
      const results = countriesData.filter((country) => {
        const countryName = country.country.toLowerCase();
        const countryCapital = country.capital.toLowerCase();
        return (
          countryName.includes(lowerQuery) || 
          countryCapital.includes(lowerQuery)
        );
      });
      setFilteredResults(results);
      setDropdownVisible(true);
    } else {
      setFilteredResults([]);
      setDropdownVisible(false);
    }
  }, [query]);

  const handleSelect = (country) => {
    navigate(`/result/${country.country}`);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by country or capital..."
      />
      {isDropdownVisible && (
        <ul className="autocomplete-dropdown">
          {filteredResults.length > 0 ? (
            filteredResults.map((country, index) => (
              <li key={index} onClick={() => handleSelect(country)}>
                <strong>{country.country}</strong>
              </li>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
