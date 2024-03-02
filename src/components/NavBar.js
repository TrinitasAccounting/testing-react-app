
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/test">Test</NavLink>
        </nav>
    )
}

export default NavBar;