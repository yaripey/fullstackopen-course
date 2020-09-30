import React from 'react'

const Total = ({ parts }) => {
    const total = parts.reduce((s, p) => {
        let res
        if (typeof (s) == "object") {
            res = s.exercises + p.exercises
        } else {
            res = s + p.exercises
        }
        return res
    })
    return (
        <b>Number of exercises {total}</b>
    )
}

export default Total