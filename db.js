const mongoose = require('mongoose');
const dbHOST = process.env.CONNECTION_STRING;

mongoose.connect(dbHOST)
    .then(() => {
        console.log('MongoDB Connnected...')
    }).catch((err) => {
        console.log('Error while Mongo Conn..', err);
    })