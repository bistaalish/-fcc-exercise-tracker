const mongoose = require('mongoose');

/**
 * ! This is a exercise Model
 * @param userId description, date 
 */

const exerciseSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true,"Must include a userId"]
    },
    duration: {
        type: String,
        required: [true, "Must include a duration"]
    },
    description: {
        type: String,
        required: [true,"Must include a description"]
    },
    date: {
        type: String,
        default:  new Date().toDateString()
    }
    
});

const Exercise = mongoose.model('Exercise', exerciseSchema)