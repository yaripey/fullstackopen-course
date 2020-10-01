import React from 'react'

const Person = ({ person, deleteContact }) => {
    return (
        <li>{person.name} {person.number} <button className={person.id} onClick={deleteContact}>Delete</button></li>
    )
}


export default Person