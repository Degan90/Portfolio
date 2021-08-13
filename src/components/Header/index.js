import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <header>
        <nav className="nav">
          <Link to="/">
            <h4>Home</h4>
          </Link>
          <Link to="/about">
            <h4>About</h4>
          </Link>
          <Link to="/contact">
            <h4>Contact</h4>
          </Link>
          <Link to="/project">
            <h4>Project</h4>
          </Link>
          <Button variant="outline-success" href="#">
            Resume
          </Button>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
