import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true 
    },
    cover: {
        type: String,
        required: true
    },
    suggestions: [String],
    date: { 
        type: Date,
        required: true,
        default: Date.now
    },
    instructorID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'instructorModel'
    },
    nStudents: {
        type: Number,
        default: 0
    },
    nLectures: {
        type: Number,
        default: 0
    },
    nQuestions: {
        type: Number,
        default: 0
    },
})

courseSchema.virtual('students', {
    ref: 'Enroll',
    localField: '_id',
    foreignField: 'cid'
});

courseSchema.virtual('lectures', {
    ref: 'Lecture',
    localField: '_id',
    foreignField: 'cid'
});

courseSchema.virtual('questions', {
    ref: 'Question',
    localField: '_id',
    foreignField: 'cid'
});

const courseModel = mongoose.model('courseModel', courseSchema)

export default courseModel