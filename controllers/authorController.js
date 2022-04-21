const res = require("express/lib/response");
const {Book,Author} = require("../models/models");

const authorController = {
    
    //ADD AUTHOT
    addAuthor : async(req,res) => {
        try{
            // console.log(req);
            console.log(req.body);
            const newAuthor = new Author(req.body);
            const saveAuthor = await newAuthor.save();
            res.status(200).json(saveAuthor);
        }catch(err){
            res.status(500).json(err);
        }     
    },

    //GET ALL AUTHOR
    getAllAuthors: async(req,res) => {
        try{
            const authors = await Author.find();
            res.status(200).json(authors)
        }catch(err){
            res.status(500).json(err);
        }        
    },
    // GET AN AUTHOR
    getAnAuthor: async(req,res) => {
        try{
            const author = await Author.findById(req.params.id).populate('books')
                res.status(200).json(author);
        }catch(err){
            res.status(500).json(err);
        }
    },
};

module.exports = authorController;