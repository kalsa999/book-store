import { Link } from "react-router-dom"
function BookDetailPage(){
    return (
    <>
    <h1>la page pour afficher les detail d'un Livre</h1>
     <Link to={'/books'}>Retour</Link>
</>
    )

}

export default BookDetailPage