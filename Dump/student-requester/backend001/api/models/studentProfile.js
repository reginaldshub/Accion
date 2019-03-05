const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentProfileSchema = new Schema({
    userId: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        require: true
    },
    pincode: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    country: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        required: true
    }

}
);


module.exports = mongoose.model('studentProfile', studentProfileSchema, 'studentProfile');
