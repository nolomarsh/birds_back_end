//****************
//* Dependencies *
//****************
const cors = require('cors')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

//***************
//* Middleware **
//***************
app.use(express.json())
app.use(cors())

//***************
//* Controllers *
//***************
const birdsController = require('./controllers/birds.js')
app.use("/birds", birdsController)

//***************
//*** Routes ****
//***************
app.get('/', (req,res) => {
    res.redirect('/birds')
})

//***************
//** Listeners **
//***************
app.listen(3000, () => {
    console.log('listening')
})

mongoose.connect('mongodb://localhost:27017/merncrud', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...')
})
