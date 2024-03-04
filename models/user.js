const mongoose = require("mongoose")

const myschema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    ip_address: {
        type: String
    },
    city: {
        type: String
    }
}, { timestamps: true }
)

const Users = mongoose.model('Users', myschema);

module.exports = Users;

