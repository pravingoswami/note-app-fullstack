
const mongoose = require('mongoose')


const Schema = mongoose.Schema


const catagorySchema = new Schema({
    // defining the department
    name : {
        type : String,
        required : true
    }

})

// making the model of the note in this we will pass two arguments one for name one is schema
// model - Models are fancy constructors compiled from Schema definitions. An instance of a model is called a document.

const Catagory = mongoose.model('Catagory', catagorySchema)

module.exports = Catagory