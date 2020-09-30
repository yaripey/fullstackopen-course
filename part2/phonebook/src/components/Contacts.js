import React from 'react'
import Person from './Person'

const Contacts = ({ namesToShow }) => {


    return (
        <ul>
            {namesToShow.map((person) =>
                <Person person={person} key={person.id} />
            )}
        </ul>
    )
}

export default Contacts