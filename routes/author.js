const authorController = require("../controllers/authorController");


const router = require('express').Router();
//GET AN AUTHOR
router.get('/:id',authorController.getAnAuthor);


// ADD AUTHOR
router.post('/',authorController.addAuthor);


//GET ALL AUTHOR
router.get('/',authorController.getAllAuthors);

module.exports = router;