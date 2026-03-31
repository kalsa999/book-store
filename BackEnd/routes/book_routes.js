import express from 'express'
import { getAllBooks,deleteBook,addBook,getBookbyID } from '../controllers/books_controller.js';

const router= express.Router()

router.get("/",getAllBooks);
router.delete("/:id",deleteBook);
router.post("/",addBook);
router.get("/:id",getBookbyID);




export default router;