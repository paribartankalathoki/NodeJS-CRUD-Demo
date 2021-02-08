const express = require('express')
const router = express.Router()
const Note = require('../models/note')

router.get('/', async(req, res) => {
    try {
        const notes = await Note.find()
        res.send(notes)
    } catch (error) {
        res.send('Error Occurs: ', error);
    }
})

router.get('/:id', async(req, res) => {
    try {
        const noteById = await Note.findById(req.params.id)
        res.send(noteById)
    } catch (error) {
        res.send('Error Occurs: ', error);
    }
})

router.post('/', async(req, res) => {
    const note = new Note({
        name: req.body.name,
        subjectCode: req.body.subjectCode,
        subjectCode: req.body.subjectCode
    })

    try {
        const saveNote = await note.save();
        res.json(saveNote)
    } catch (error) {
        console.log('Error Occurs in post request: ', error);
    }
})

router.patch('/:id', async(req, res) => {
    try {
        const pathchNoteById = await Note.findById(req.params.id)
        pathchNoteById.subjectCode = req.body.subjectCode
        const savePathchedNoteById = await pathchNoteById.save()
        res.send(savePathchedNoteById)
    } catch (error) {
        res.send('Error Occurs: ', error);
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const pathchNoteById = await Note.findById(req.params.id)
        const savePathchedNoteById = await pathchNoteById.delete(pathchNoteById)
        res.send(savePathchedNoteById)
    } catch (error) {
        res.send('Error Occurs: ', error);
    }
})
module.exports = router