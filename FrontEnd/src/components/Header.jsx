import { NavLink } from "react-router-dom";
import { keycloak }from "../auth/KeycloakProvider"

export default function Header(){
    const isAuth=keycloak.authenticated
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
            <NavLink to={"/categories"}>Categories</NavLink>
            {!isAuth ? (
                <>
                <button onClick={()=> keycloak.login()}>Login</button>
                <button onClick={()=> keycloak.register()}>Register</button>
                </>
            ) : (
                <button onClick={()=> keycloak.logout({ redirectUri:"http://localhost:5173"})}>Logout</button>
            )
            }
        </nav>
    </header>
    )
}

