import { addCategory, getCategories } from "../controllers/categories_controller.js";
import express  from 'express'

const router=express.Router()

router.get("/",getCategories)
router.post("/",addCategory)

export default router
