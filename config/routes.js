const express = require('express')
const noteController = require('../app/controller/noteController')
const catagoryController = require('../app/controller/catagoryController')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser');


const Note = require('../app/models/note')

// importing the multer

const multer = require('multer')



// we gave the option for the file what will be the name of the file and what will be tha path of the file for the storage

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, './uploads/')
    },
    filename : function(req, file, cb){
        cb(null, file.originalname)
    }
})

// we will pass storage object to the multer options


const upload = multer({storage : storage})

const router = express.Router()

router.get('/notes', noteController.list)
router.get('/notes/:id', noteController.show)
router.post('/notes',  upload.single('noteImage') , noteController.create)



// router.post('/notes', upload.single('noteImage') ,(req, res) => {

//     console.log(req.file)
//     // console.log(req.files)

//     const body = req.body
//     body.noteImage = req.file.path
//     console.log(body)

// // creating the object by the constructor of the Notes
// const note = new Note(body)

// // saving into the mongo db by save() method
// note.save()
//     .then(note => {
//         res.json(note)
//     })
//     .catch(err => res.json(err))

// })






router.put('/notes/:id', upload.single('noteImage'), noteController.update)
router.delete('/notes/:id', noteController.destroy)


// router.get('/notes', noteController.list)
// router.get('/notes/:id', noteController.show)
// router.post('/notes', noteController.create)
// router.put('/notes/:id', noteController.update)
// router.delete('/notes/:id', noteController.destroy)

router.get('/catagories', catagoryController.list)
router.get('/catagories/:id', catagoryController.show)
router.post('/catagories', catagoryController.create)
router.put('/catagories/:id', catagoryController.update)
router.delete('/catagories/:id', catagoryController.destroy)


module.exports = router
