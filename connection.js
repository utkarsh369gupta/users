const mongoose = require('mongoose')

async function connectToMongoDb(url) {
    return mongoose.connect(url)
}

module.exports = {
    connectToMongoDb
};


// mongodb+srv://Utkarsh:Utkarsh@cluster0.f8wsqub.mongodb.net/Users