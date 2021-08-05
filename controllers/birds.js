const express = require('express')
const router = express.Router()
const Bird = require('../models/birds.js')

//index(get)
router.get('/', (req,res) => {
    Bird.find({}, (error, foundBirds) => {
        res.json(foundBirds)
    })
})

//new(post)
router.post('/', (req,res) => {
    Bird.create(req.body, (error, newBird) => {
        res.json(newBird)
    })
})

//update(put)
router.put('/:id', (req,res) => {
    Bird.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedBird) => {
        res.json(updatedBird)
    })
})

//delete
router.delete('/:id', (req,res) => {
    Bird.findByIdAndRemove(req.params.id, (error, deletedBird) => {
        res.json(deletedBird)
    })
})


module.exports = router
