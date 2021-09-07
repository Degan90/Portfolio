import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="nav" >
                <Link to="/" >
                    <h4>Home</h4>
                </Link>
                <Link to="/about">
                    <h4>About</h4>
                </Link>
                <Link to="/contact" >
                    <h4>Contact</h4>
                </Link>
                <Link to="/project" >
                    <h4>Project</h4>
                </Link>
               
            </nav>
        </header>

    )
}

export default Header;
