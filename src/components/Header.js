import { Link } from "react-router-dom";
import Logo from "../assets/rp-logo.a76b4d6a8e6239425057.png";

export default function Header() {
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
                    <Link to="/">Home</Link>
                    <Link to="/diplomas">Diplomas</Link>
                    <Link to="/register">Register</Link>
                </nav>
            </header>
        </div>
    )
}