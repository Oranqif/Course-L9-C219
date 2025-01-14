import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/rp-logo.a76b4d6a8e6239425057.png";

export default function Header() {
    const getClass = ({ isActive }) => isActive ? "nav-active" : null;

    return (
        <div>
            <header className="container">
                <Link>
                    <img
                        className="logo"
                        src={Logo}
                        alt="Republic Polytechnic Logo"
                        title="Republic Polytechnic | Home"
                    />
                </Link>

                <nav>
                    <NavLink className={getClass} to="/">Home</NavLink>
                    <NavLink className={getClass} to="/diplomas">Diplomas</NavLink>
                    <NavLink className={getClass} to="/register">Register</NavLink>
                </nav>
            </header>
        </div>
    )
}