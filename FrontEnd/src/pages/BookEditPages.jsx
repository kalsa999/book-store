import { Link } from "react-router-dom"

function BookEditPages(){
    return (
    <>
    <h1>La page pour modifier un livre</h1>
    <Link to={'/books'}>Retour</Link>

</>
    )

}

export default BookEditPages