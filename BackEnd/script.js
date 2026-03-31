import express from 'express';
import booksRouter from './routes/book_routes.js';
import categoriesRouter from './routes/categories_routes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
import cors from 'cors';

dotenv.config()


const app=express()
app.use(cors({origin:"http://localhost:5173"}))
app.use(express.json())
app.use("/api/books",booksRouter)
app.use("/api/categories",categoriesRouter)

try{
    await mongoose.connect(process.env.DB_URL)
    app.listen(5000, ()=>{
    console.log("server is running")
});
}catch(error){
    console.log(error);
}


