const { response } = require('express')
const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(morgan('tiny'))

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
  },
  {
    name: "Joulu Muori",
    number: "13838383",
    id: 6
  },
  {
    name: "Pupu Tupuna",
    number: "123123",
    id: 8
  }
]  

app.get('/', (req, res) => {
  res.send('<h1>Hello there!</h1>')
})

app.get('/info', (req, res) => {
  res.send(`<p>Application has info for ${persons.length} people</p> ${new Date()}`)

})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(p => p.id === id)

  if (person) {
    res.json(person)    
  } else {
    res.status(404).end()
    console.log('ei löytynyt')
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  
  persons = persons.filter(person => person.id !== id)
  
  res.status(204).end()

})

app.post('/api/persons', (req, res) => {
  const person = req.body

  if (!person.name || !person.number) {
    return res.status(400).json({
      error: 'name or number is missing'
    })

  } else if (persons.find(p => p.name === person.name)) {
    return res.status(400).json({
      error: 'name is already in phonebook'
    })
  }

  const newId = Math.round(Math.random() * (2000 - 100) + 100)
  person.id = newId
  persons = persons.concat(person)

  res.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


