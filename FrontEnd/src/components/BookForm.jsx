import { useState, useEffect } from "react";
import { addBookAPI } from "../api/booksApi";
import { getCategoriesApi } from "../api/CategoriesAPI";

 function BookForm(){
const [title, setTitle] = useState("")
const [price, setPrice] = useState("")
const [author, setAuthor] = useState("")
const [published_at, setPublishedAt] = useState("")
const [categories,setCategories] = useState([])
const [categoryID,setCategoryID] = useState("")

  
useEffect(()=>{
    fetchCategories();
},[])
async function fetchCategories() {
    
    const resp = await getCategoriesApi()
    setCategories(resp.data)
}

async function handleSubmit(e){
    const category =categories.find(c=>c._id==categoryID)

    await addBookAPI({title,price,author,published_at,category});

}

return (
    <div>
        <h2>Ajouter un livre</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Titre :</label>
        <input id="title" onChange={e=>setTitle(e.target.value)} />
        <br />
         <label htmlFor="author">Auteur :</label>
        <input id="author"  onChange={e=>setAuthor(e.target.value)}
        required/>
        <br />
         <label htmlFor="Price">Prix :</label>
        <input id="price" type="number" onChange={e=>setPrice(e.target.value)} required/>
        <br />
         <label htmlFor="published_at">Date de Publication :</label>
        <input type="date" id="published_at" onChange={e=>setPublishedAt(e.target.value)}/>
        <br />
        <label htmlFor="category">Categorie :</label>
        <select id="category" onChange={e=>setCategoryID(e.target.value)}>
           {categories.map(c=><option key={c._id} value={c._id}>{c.name}</option>)}
        </select>
        <br />
        <input type="submit" value={"Enregistrer"} />
        <input type="reset" value={"Annuler"} />
    </form>
    </div>
)

}

export default BookForm;