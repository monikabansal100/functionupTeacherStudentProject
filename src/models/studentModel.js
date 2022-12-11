const mongoose = require("mongoose")
// let ObjectId = mongoose.Schema.types.

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    marks: {
        type: Number,
        required: true
    },
    teacher: {
        type: ObjectId,
        ref: "teacher",
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model("student", studentSchema)