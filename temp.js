const express = require('express')

// npm install mongoose

const mongoose = require('mongoose')


// node odm - node 

    // model to collection
    // an object map to a document
    // object property to document field

// creating the connection between mongo db and express  two arguments
mongoose.connect('mongodb://localhost:27017/notes-databse', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connected to db')
    })

    .catch(err => console.log(err))


// this is the constructor
const Schema = mongoose.Schema



const app = express()
app.use(express.json())



// creating the schema for the collection
const noteSchema = new Schema({
    // defining the type and validations
    title : {
        type : String,
        required : true
    }, 
    description : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : new Date()
    },
    catagory : {
        type : Schema.Types.ObjectId,
        // for the reference of other collection to get object data from different collection
        ref : 'Catagory',
        required : true
    }
})


const catagorySchema = new Schema({
    // defining the department
    name : {
        type : String,
        required : true
    }

})

// making the model of the note in this we will pass two arguments one for name one is schema
// model - Models are fancy constructors compiled from Schema definitions. An instance of a model is called a document.
const Note = mongoose.model('Note', noteSchema)

const Catagory = mongoose.model('Catagory', catagorySchema)


const port = 3015

app.get('/', (req, res) => {
    // res.send('welcome to the website')
    res.json({
        notice : 'welcome to the website'
    })
})

app.get('/notes', (req, res) => {
    
    // finding the collection in the notes
    // we using promise object or callback because this is async task
    Note.find().populate('catagory', ['_id', 'name'])
        .then(notes => {
            res.json(notes)
        })

        .catch(err => res.json(err))
})


app.get('/notes/:id', (req, res) => {

    // finding the data by id
    const id = req.params.id

    // populate is used for to get the reference of "Catagory" collection object for that we have to pass the catagory from the note schema

    // we can  pass the field which we want to reference by array of fields

    Note.findById(id).populate('catagory', ['_id', 'name'])
        .then(note => {
            
            //provide data or null
            if(note) {
                res.json(note)
            }else {
                res.json({})
            }

        })

        .catch(err => res.json(err))

})


app.get('/catagories', (req, res) => {

    // finding the documents for catagories
    Catagory.find()
        .then(note => {
            res.json(note)
        })

        .catch(err => res.json(err))
})

app.post('/catagories', (req, res) => {

    const body = req.body

    const catagory = new Catagory(body)

    console.log(catagory)

    catagory.save()
        .then(catagory => {
            res.json(catagory)
        })

        .catch(err => res.json(err))
})


app.post('/notes', (req, res) => {
    const body = req.body

    // creating the object by the constructor of the Notes
    const note = new Note(body)

    // saving into the mongo db by save() method
    note.save()
        .then(note => {
            res.json(note)
        })
        .catch(err => res.json(err))

})


app.put('/notes/:id', (req, res) => {
    const id = req.params.id
    const body = req.body

    // const note = new Note(body)
    // options :-  new - to get updated reord, runvalidators - again check for the validations
    Note.findByIdAndUpdate(id, body, {new : true, runValidators : true})
        .then(note => {
            if(note){
                res.json(note)
            } else {
                res.json(note)
            }
        }) 

        .catch(err => res.json(err))
})

app.delete('/notes/:id' , (req, res) => {
    const id = req.params.id

    Note.findByIdAndDelete(id)
        .then(note => {
            if(note){
                res.json(note)
            } else {
                res.json({})
            }
        })

        .catch(err => res.json(err))
})

app.listen(port, () => {
    console.log('listening port', port)
})
