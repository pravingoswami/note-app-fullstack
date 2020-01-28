const Catagory = require('../models/catagory')


module.exports.list = (req, res) => {

        // finding the documents for catagories
        Catagory.find()
        .then(note => {
            res.json(note)
        })

        .catch(err => res.json(err))

}

module.exports.create = (req, res) => {

    const body = req.body

    const catagory = new Catagory(body)

    console.log(catagory)

    catagory.save()
        .then(catagory => {
            res.json(catagory)
        })

        .catch(err => res.json(err))

}

module.exports.show = (req, res) => {

    const id = req.params.id



    Catagory.findById(id)
        .then(catagory => {
            catagory ? res.json(catagory) : res.json({})
        })

        .catch(err => res.json(err))

}


module.exports.update = (req, res) => {

    const id = req.params.id
    const body = req.body



    Catagory.findByIdAndUpdate(id, body, {new : true, runValidators : true})
        .then(catagory => {
            catagory ? res.json(catagory) : res.json({})
        })

        .catch(err => res.json(err))

}


module.exports.destroy = (req, res) => {

    const id = req.params.id



    Catagory.findByIdAndDelete(id)
        .then(catagory => {
            catagory ? res.json(catagory) : res.json({})
        })

        .catch(err => res.json(err))

}




// app.get('/catagories', (req, res) => {

    // // finding the documents for catagories
    // Catagory.find()
    //     .then(Catagory => {
    //         res.json(note)
    //     })

    //     .catch(err => res.json(err))
// })

// app.post('/catagories', (req, res) => {

    // const body = req.body

    // const catagory = new Catagory(body)

    // console.log(catagory)

    // catagory.save()
    //     .then(catagory => {
    //         res.json(catagory)
    //     })

    //     .catch(err => res.json(err))
// })
