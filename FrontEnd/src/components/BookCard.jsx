import { Link } from "react-router-dom"
import { deleteBookAPI } from "../api/booksApi"



function BookCard({book}) {
    async function deleteBook(id){
        await deleteBookAPI(id)

    }
    return (
        <div >
            
            <h3>Titre: {book.title}</h3>
            <h3>Auteur:{book.author}</h3>
            <h3>Prix: {book.price}</h3>
            <h3>Categorie: {book.category.name}</h3>
            
            <Link to={`/books/edit/${book._id}`}>Modifier</Link>
            <br />
            <Link to={`/books/detail/${book._id}`}>Détails</Link>
            <br />
            <button onClick={()=>deleteBook(book._id)}>Supprimer</button>
        </div>
    )
        
}

export default BookCard