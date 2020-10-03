const express = require('express')
const morgan = require('morgan')
const app = express()


const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path: ', request.path)
    console.log('Body: ', request.body)
    console.log('---')
    next()
}


app.use(express.json())
app.use(
    morgan(':method :url :status - :response-time ms ')
)
// app.use(requestLogger)

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelance",
        number: "12-23-23213"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12321312321"
    }
]


// Get main page
app.get('/', (request, response) => {
    response.send('<h1>Hi there!</h1>')
})

// Info page
app.get('/info/', (request, response) => {
    const date = new Date()
    response.send(
        'Phonebook has info for ' +
        persons.length +
        ' people <br>' +
        date
    )
})


// Api
// Get all persons
app.get('/api/persons', (request, response) => {
    response.json(persons)
})

// Get one person
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

// Create one person

const generateId = () => {
    return Math.floor(Math.random() * Math.floor(10000000))
}

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    if (persons.find(person => person.name === body.name)) {
        return response.status(400).json({
            error: 'name must eb unique'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }

    persons = persons.concat(person)

    response.json(person)

})

// Delete one note
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})


// After routes
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)



const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})