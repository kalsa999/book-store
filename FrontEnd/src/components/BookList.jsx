
import { useEffect, useState } from "react"
import {  getBooksAPI } from "../api/booksApi"
import BookCard from "./BookCard"


export default function BookList() {
    const[books,setBooks]=useState([])
   
    async function fetchBooks() {
        const data=await getBooksAPI()
        setBooks(data)
    }

     useEffect(()=>{
        fetchBooks()
    },[])

    return (
        <div>
        {books.map((b) => (
            <BookCard key={b._id} book={b} onDeleted={fetchBooks}/>
            ))}
        </div>
        
    )

}

