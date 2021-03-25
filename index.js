const { response } = require('express')
const express = require('express')
const app = express()

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

/*
const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(persons))
})
*/

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
  

  //jotain koodia siitä että id:tä ei löydy
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


