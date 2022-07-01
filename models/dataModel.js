const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    NameOfTheCandidate:{
        type: String,
        required: true,
        trim: true
    },
    Email:{
        type: String,
        required: true,
        sparse: true
    },
    MobileNo:{
        type: Number,
        required: true
    },
    DateOfBirth:{
        type: String,
        required: true
    },
    WorkExperience:{
        type: String,
        required: true
    },
    ResumeTitle:{
        type: String,
        required: true
    },
    CurrentLocation:{
        type: String,
        required: true
    },
    PostalAddress:{
        type: String,
        required: true
    },
    CurrentEmployer:{
        type: String
    },
    CurrentDesignation:{
        type: String
    }
})

const Data = mongoose.model('Data', dataSchema, 'Data');

module.exports = Data