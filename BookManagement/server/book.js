const mongoose = require('mongoose');
const Schema =new mongoose.Schema({
    bookname: {
        type: String,
        required: true
    },
    bookauthor: {
        type: String,
        required: true
    },
    bookprice: {
        type: Number,
        required: true
    },
    publishdate: {
        type: string,
        required: false
    }
})
const Book = mongoose.model('Book',Schema);
module.exports=Book;