const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({
    teacherName: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

}, {timestamps: true})

module.exports = mongoose.model("teacher", teacherSchema)