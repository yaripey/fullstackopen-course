import React from 'react'
import ReactDOM from 'react-dom'

const Part = (props) => (
    <p>{props.part} {props.exercises}</p>
)

const Header = (props) => (
    <h1>{props.course.name}</h1>
)

const Content = (props) => (
    <div>
        <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
        <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
        <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
)

const Total = (props) => {
    let total = 0;
    for (let i = 0; i < props.parts.length; i++) {
        total += props.parts[i].exercises;
    };
    return (
        <p>Number of exercises {total}</p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }
    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))