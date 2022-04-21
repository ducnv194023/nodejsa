const {Book,Author} = require("../models/models");

const bookController = {
    //ADD A BOOK
    addBook: async (req,res) => {
        try{
            const newBook = new Book(req.body);
            const saveBook = await newBook.save();
            if (req.body.author){
                const author = Author.findById(req.body.author);
                await author.updateOne( {$push : {books: saveBook._id} });
            }
            res.status(200).json(saveBook);
        }catch(err){
            res.status(500).json(err);
        }
    },
    // GET ALL BOOKS 
    getBook: async(req,res) => {
        try{
            const books = await Book.find();
            res.status(200).json(books);
        }catch(err){
            res.status(500).json(err);
        }
    },

    // GET A BOOK 
    getDetailBook: async(req,res) => {
        try{
            const book = await Book.findById(req.params.id).populate('author');
            res.status(200).json(book);
        }catch(err){
            res.status(500).json(err);
        }
    },

    // DELETE A BOOK
    deleteBook: async(req,res) => {
        try{
            await Author.updateMany(
            { books : req.params.id },
            { $pull : { books : req.params.id}}
            );
            const book = await Book.findById(req.params.id).deleteOne();
            res.status(200).json('Delete Success');
        }catch(err){
            res.status(500).json(err);
        }
    },

    //UPDATE BOOK
    updateBook: async(req,res) => {
        try{
            const book = await Book.findById(req.params.id);
            await book.updateOne({$set: req.body});
                res.status(200).json('updated Success');
        }catch(err){
            res.status(500).json(err);
        }
    }
};

module.exports = bookController;