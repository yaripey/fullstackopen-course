import React from 'react'
import Country from './Country'
import CountryFull from './CountryFull'

const CountriesList = ({ countries, setSearch }) => {
    if (countries.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    } else if (countries.length === 1) {
        return (
            <CountryFull country={countries[0]} />
        )
    } else {
        return (
            countries.map(country => <Country setSearch={setSearch} key={country.alpha2Code} country={country} />)
        )
    }

}

export default CountriesList