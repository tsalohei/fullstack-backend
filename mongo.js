const mongoose = require('mongoose')


if (process.argv.length < 3) {
    console.log("give password as argument, please")
    process.exit(1);
}

const password = process.argv[2]

const url =
  `mongodb+srv://puhelinluettelo_app:${password}@cluster0.v1o27.mongodb.net/puhelinluetteloDatabase?retryWrites=true&w=majority`


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

switch (process.argv.length) {   
    case 3: 
        console.log('phonebook:')
        Person.find({}).then(result => {
            result.forEach(person => {
                console.log(person.name, person.number)
            })
            mongoose.connection.close()
        })  
        break;
    case 5: 
        const name = process.argv[3]
        const number = process.argv[4]
        
        const person = new Person({
            name: name,
            number: number,
        })
        person.save().then(response => {
            console.log(`Added person ${name} number ${number} to phonebook`)
            mongoose.connection.close()
            
        })
        break;           
}

