const Note = require('../models/note')

// const mongoose = require('mongoose')


// // importing the multer

// const multer = require('multer')



// // we gave the option for the file what will be the name of the file and what will be tha path of the file for the storage

// const storage = multer.diskStorage({
//     destination : function(req, file, cb){
//         cb(null, './uploads/')
//     },
//     filename : function(req, file, cb){
//         cb(null, file.originalname)
//     }
// })

// // we will pass storage object to the multer options


// const upload = multer({storage : storage})



module.exports.create = (req, res) => {
    console.log(req.file)
    // console.log(req.files)

    const body = req.body
    body.noteImage = req.file.path
    console.log(body)

// creating the object by the constructor of the Notes
    const note = new Note(body)

// saving into the mongo db by save() method
note.save()
    .then(note => {
        res.json(note)
    })
    .catch(err => res.json(err))

}


module.exports.list = (req, res) => {

        // finding the collection in the notes
    // we using promise object or callback because this is async task
    Note.find().populate('catagory', ['_id', 'name'])
        .then(notes => {
            res.json(notes)
        })

        .catch(err => res.json(err))

}

module.exports.show = (req, res) => {

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
    
}

// module.exports.create = (req, res) => {

//         const body = req.body

//     // creating the object by the constructor of the Notes
//     const note = new Note(body)

//     // saving into the mongo db by save() method
//     note.save()
//         .then(note => {
//             res.json(note)
//         })
//         .catch(err => res.json(err))

// }

module.exports.update = (req, res) => {

    const id = req.params.id

    console.log(req.file)
    // console.log(req.files)

    const body = req.body
    body.noteImage = req.file.path
    console.log(body)



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

}

module.exports.destroy = (req, res) => {

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

}


// app.get('/notes', (req, res) => {
    
//     // finding the collection in the notes
//     // we using promise object or callback because this is async task
//     Note.find().populate('catagory', ['_id', 'name'])
//         .then(notes => {
//             res.json(notes)
//         })

//         .catch(err => res.json(err))
// })


// app.get('/notes/:id', (req, res) => {

//     // finding the data by id
//     const id = req.params.id

//     // populate is used for to get the reference of "Catagory" collection object for that we have to pass the catagory from the note schema

//     // we can  pass the field which we want to reference by array of fields

//     Note.findById(id).populate('catagory', ['_id', 'name'])
//         .then(note => {
            
//             //provide data or null
//             if(note) {
//                 res.json(note)
//             }else {
//                 res.json({})
//             }

//         })

//         .catch(err => res.json(err))

// })




// app.post('/notes', (req, res) => {
//     const body = req.body

//     // creating the object by the constructor of the Notes
//     const note = new Note(body)

//     // saving into the mongo db by save() method
//     note.save()
//         .then(note => {
//             res.json(note)
//         })
//         .catch(err => res.json(err))

// })


// app.put('/notes/:id', (req, res) => {
    // const id = req.params.id
    // const body = req.body

    // // const note = new Note(body)
    // // options :-  new - to get updated reord, runvalidators - again check for the validations
    // Note.findByIdAndUpdate(id, body, {new : true, runValidators : true})
    //     .then(note => {
    //         if(note){
    //             res.json(note)
    //         } else {
    //             res.json(note)
    //         }
    //     }) 

    //     .catch(err => res.json(err))
// })

// app.delete('/notes/:id' , (req, res) => {
    // const id = req.params.id

    // Note.findByIdAndDelete(id)
    //     .then(note => {
    //         if(note){
    //             res.json(note)
    //         } else {
    //             res.json({})
    //         }
    //     })

    //     .catch(err => res.json(err))
// })