const bookController = require('../controllers/bookController')


const router = require('express').Router();
// GET A BOOK
router.get('/:id',bookController.getDetailBook);

// UPDATE BOOK
router.put('/:id',bookController.updateBook);
//DELETE A BOOK
router.delete('/:id',bookController.deleteBook);
// ADD a BOOK

router.post('/',bookController.addBook);

// GET ALL BOOKs
router.get('/',bookController.getBook);



module.exports = router;