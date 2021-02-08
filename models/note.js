const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    subjectCode: {
        type: String,
        required: true
    },
    creditHours: {
        type: String,
        required: false,
        default: 2
    }

})

module.exports = mongoose.model('Note',noteSchema)