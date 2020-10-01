import React, { useState, useEffect } from 'react';
import axios from 'axios'
import SearchFilter from './components/SearchFilter'
import CountriesList from './components/CountriesList'

function App() {
    const [countries, setCountries] = useState([])
    const [currentSearch, setSearch] = useState('')

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data.filter(country => (country.name.toLowerCase().indexOf(currentSearch.toLowerCase()) !== -1)))
            })
    })


    const searchChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <SearchFilter currentSearch={currentSearch} searchChange={searchChange} />
            <CountriesList countries={countries} setSearch={setSearch} />
        </div>
    );
}

export default App;
