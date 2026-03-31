import { NavLink } from "react-router-dom";

function Header(){
    return(
    <header>
        <div>
            <strong>
                BookApp
            </strong>
        </div>
        <nav>
            <NavLink to={"/"}>Acceuil</NavLink>
            <NavLink to={"/books"}>Livres</NavLink>
            <NavLink to={"/about"}>A propos</NavLink>
            <NavLink to={"/categories"}>categories</NavLink>
        </nav>
    </header>
    )
}

export default Header