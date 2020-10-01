import React, { useState, useEffect } from 'react'
import SearchFilter from './components/SearchFilter'
import NewContactForm from './components/NewContactForm'
import Contacts from './components/Contacts'
import axios from 'axios'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [currentSearch, setSearch] = useState('')

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
    }, [])

    let namesToShow = []
    if (currentSearch === "") {
        namesToShow = persons
    } else {
        namesToShow = persons.filter(contact => (contact.name.toLowerCase().indexOf(currentSearch.toLowerCase()) !== -1))
        console.log(namesToShow)
    }

    const newNameHandler = (event) => {
        event.preventDefault()
        let search = ''
        for (let i = 0; i < persons.length; i++) {
            if (persons[i].name === newName) {
                search = persons[i].name
            }
        }
        if (search !== '') {
            alert('There is already such name')
            console.log('test')
            return false
        } else {
            const nameObject = {
                name: newName,
                number: newNumber,
                id: persons.length + 1,
            }
            setPersons(persons.concat(nameObject))
            setNewName('')
            setNewNumber('')
        }
    }

    const nameChange = (event) => {
        setNewName(event.target.value)
    }

    const numberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const searchChange = (event) => {
        setSearch(event.target.value)

    }

    return (
        <div>
            <h2>Phonebook</h2>
            <SearchFilter currentSearch={currentSearch} searchChange={searchChange} />
            <h2>add a new</h2>
            <NewContactForm newNameHandler={newNameHandler} newName={newName} nameChange={nameChange} newNumber={newNumber} numberChange={numberChange} />
            <h2>Numbers</h2>
            <Contacts namesToShow={namesToShow} />
        </div>
    )
}

export default App