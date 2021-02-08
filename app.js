const express = require('express')
const mongoose = require('mongoose')

const url = 'mongodb://localhost/Note'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('Database connected successfully.');
})

app.use(express.json())

const notesRouter = require('./routes/notes')
app.use('/notes', notesRouter)

const port = '8080';
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
