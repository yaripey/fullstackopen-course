import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => (
    <h1>{text}</h1>
)

const Button = ({ handler, text }) => (
    <button onClick={handler}>{text}</button>
)

const Stat = ({ text }) => (
    <p>has {text} votes</p>
)

const Anecdote = ({ text }) => (
    <p>{text}</p>
)

const App = ({ anecdotes }) => {
    let pointsBefore = []
    for (let i = 0; i < anecdotes.length; i++) {
        pointsBefore.push(0)
    }
    const [selected, setSelected] = useState(0)
    const [points, changePoints] = useState(pointsBefore)
    const [max, setMax] = useState(0)


    const anecdoteChanger = () => {
        const max = anecdotes.length;
        const nextAnecdote = Math.floor(Math.random() * max);
        setSelected(nextAnecdote)
    }

    const vote = () => {
        const copy = [...points]
        if (copy[selected] === undefined) {
            copy[selected] = 1
        } else {
            copy[selected] += 1
        }
        changePoints(copy)
    }

    const getMaxAnecdote = () => {
        for (let i = 1; i < points.length; i++) {
            if (points[i] > points[max]) setMax(i)
        }
        return anecdotes[max]
    }
    return (
        <div>
            <Header text={'Anecdote of the day'} />
            <Anecdote text={anecdotes[selected]} />
            <Stat text={points[selected]} />
            <Button handler={vote} text={'vote'} />
            <Button handler={anecdoteChanger} text={'next anecdote'} />
            <Header text={'Anecdote with most votes'} />
            <Anecdote text={getMaxAnecdote()} />
            <Stat text={points[max]} />
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)