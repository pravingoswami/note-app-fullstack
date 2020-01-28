const mongoose = require('mongoose')


// this is the constructor
const Schema = mongoose.Schema




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
    noteImage : {
        type : String
    },
    catagory : {
        type : Schema.Types.ObjectId,
        // for the reference of other collection to get object data from different collection
        ref : 'Catagory',
        required : true
    }
})

const Note = mongoose.model('Note', noteSchema)


module.exports = Note
