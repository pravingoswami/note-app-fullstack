const express = require('express')

const router = require('./config/routes')

const fileUpload = require('express-fileupload')

// npm install mongoose

const mongoose = require('mongoose')

// node odm - node 

    // model to collection
    // an object map to a document
    // object property to document field

    
// database configuration 
const setupDB = require('./config/database')
var cors = require('cors')



const app = express()





app.use(express.json())
app.use( '/uploads',  express.static('uploads'))

app.use(cors())

setupDB()




const port = 3015

app.get('/', (req, res) => {
    // res.send('welcome to the website')
    res.json({
        notice : 'welcome to the website'
    })
})



// middle ware for redirect to touter.js
app.use('/', router)


app.listen(port, () => {
    console.log('listening port', port)
})
