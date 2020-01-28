const mongoose = require('mongoose')


const setupDB = () => {
            // creating the connection between mongo db and express  two arguments
        mongoose.connect('mongodb://localhost:27017/notes-databse', {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log('connected to db')
        })

        .catch(err => console.log(err))
}

module.exports = setupDB