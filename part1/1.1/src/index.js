import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
    <h1>{props.course}</h1>
)

const Content = (props) => (
    <div>
        <p>{props.parts[0].part} {props.parts[0].exer}</p>
        <p>{props.parts[1].part} {props.parts[1].exer}</p>
        <p>{props.parts[2].part} {props.parts[2].exer}</p>
    </div>
)

const Total = (props) => {
    let total = 0;
    for (let i = 0; i < props.exercises.length; i++) {
        total += props.exercises[i];
    };
    return (
        <p>Number of exercises {total}</p>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    return (
        <div>
            <Header course={course} />
            <Content
                parts={[{ part: part1, exer: exercises1 }, { part: part2, exer: exercises2 }, { part: part3, exer: exercises3 }]} />
            <Total exercises={[exercises1, exercises2, exercises3]} />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))