const express = require('express')
const mongoose = require('mongoose')
const post = require('./routes/post')
const users = require('./routes/users')

const app = express()
const port = 4000

const url = 'mongodb://127.0.0.1/expressFB'

mongoose.connect(url,{useNewUrlParser: true})
const con = mongoose.connection

con.on('open', () => {
    console.log("MongoDB Connected")
})

app.use(express.json())
app.use('/post', post)
app.use('/users', users)



app.listen(port, () => {
    console.log(`app starting on ${port}`);
})