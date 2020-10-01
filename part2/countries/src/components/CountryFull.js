import React from 'react'
import Weather from './Weather'

const CountryFull = ({ country }) => (
    <div>
        <h2>{country.name}</h2>
        <div>capital: {country.capital}</div>
        <div>population: {country.population}</div>
        <h4>languages</h4>
        <ul>
            {
                country.languages.map(language =>
                    <li key={language.iso639_1}>{language.name}</li>
                )}
        </ul>
        <Weather capital={country.capital} />
        <img src={country.flag} alt="" />
    </div>
)

export default CountryFull