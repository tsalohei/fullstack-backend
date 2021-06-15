require('dotenv').config()
const { response } = require('express')
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const Person = require('./models/person')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

morgan.token('body', function (req, res) { return JSON.stringify(req.body) })

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

const errorHandler = (error, req, res, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

app.get('/', (req, res) => {
  res.send('<h1>Hello there!</h1>')
})

app.get('/info', (req, res) => {
  res.send(`<p>Application has info for ${persons.length} people</p> ${new Date()}`)

})

app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    //console.log(persons)
    res.json(persons)
  })
  
})

app.get('/api/persons/:id', (req, res, next) => {
  /*
  const id = Number(req.params.id)
  const person = persons.find(p => p.id === id)

  if (person) {
    res.json(person)    
  } else {
    res.status(404).end()
    console.log('ei löytynyt')
  }
  */
  Person.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person)
      } else {
        res.status(404).end()
      }
    })
    .catch(error => {
      console.log("WAT IS THIS")
      next(error)
    })




})

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

/*
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
*/
app.post('/api/persons', (req, res) => {
  const body = req.body

  if (body.name === '' || body.number === '') {
    return res.status(400).json({
      error: 'name or number is missing!'
    })
  }
  //KÄSITTELE TUPLAHENKILÖ-ERROR

  const person = new Person ({
    name: body.name,
    number: body.number,
  })
  
  person.save().then(savedPerson => {
    res.json(savedPerson)
  })

})

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

app.use(errorHandler)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


