const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
       

    },
    publishedDate: {
        type: String
    },
    genres: {
        type: [String]
    },
    author : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    }
});

const authorSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
        
    },
    year:{
        type: Number,  
        required: true
    },
    books :[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        },
    ],
});
let Book = mongoose.model("Book",bookSchema);
let Author = mongoose.model("Author",authorSchema);

module.exports = {Book,Author};