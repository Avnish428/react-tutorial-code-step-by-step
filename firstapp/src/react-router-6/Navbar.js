import { NavLink } from "react-router-dom";
// style={((isActive) => { return { backgroundColor: isActive ? "red" : "" } })}
const Navbar = () => {
    return (
        <div>
            <ul >
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink  to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/filter">Filter</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </div>
    )

}

export default Navbar;