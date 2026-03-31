import Category from "../models/Category.js";


export async function getCategories(req,res) {
    const categories = await Category.find();
    res.json(categories)
    
}

export async function addCategory(req,res) {

    const cat = await Category.create(req.body);
    res.json(cat)
    
}