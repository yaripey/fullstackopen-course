import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ headerText }) => (
    <h1>{headerText}</h1>
)

const Button = ({ eventHandler, buttonText }) => (
    <button onClick={eventHandler}>{buttonText}</button>
)

const Stats = ({ stats, statsText }) => {
    if (stats !== 0) {
        return (
            <tr>
                <td>{statsText}</td>
                <td>{stats}</td>
            </tr>
        )
    } else {
        return null
    }
}

const Statistics = ({ data }) => {
    const [good, neutral, bad] = data
    const countAverage = () => {
        const all = good + neutral + bad
        let amount = 0
        for (let i = 0; i < good; i++) {
            amount += 1
        }
        for (let i = 0; i < bad; i++) {
            amount += -1
        }
        if (all === 0) {
            return "(can't show average now, because there are no votes)"
        }
        return amount / all
    }

    const countPositive = () => {
        const all = good + neutral + bad
        if (all === 0) {
            return "(can't show positive now, because there are no votes)"
        }
        return (good * 100) / all + '%'
    }
    if (good + neutral + bad === 0) {
        return ("No feedback given")
    }
    return (
        <table>
            <tbody>
                <Stats stats={good} statsText={'good'} />
                <Stats stats={neutral} statsText={'neutral'} />
                <Stats stats={bad} statsText={'bad'} />
                <Stats stats={good + neutral + bad} statsText={'all'} />
                <Stats stats={countAverage()} statsText={'average'} />
                <Stats stats={countPositive()} statsText={'positive'} />
            </tbody>
        </table>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)



    return (
        <div>
            <Header headerText={'give feedback'} />
            <Button eventHandler={() => setGood(good + 1)} buttonText={'good'} />
            <Button eventHandler={() => setNeutral(neutral + 1)} buttonText={'neutral'} />
            <Button eventHandler={() => setBad(bad + 1)} buttonText={'bad'} />
            <Header headerText={'statistics'} />
            <Statistics data={[good, neutral, bad]} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)