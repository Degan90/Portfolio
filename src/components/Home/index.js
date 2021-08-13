import { Link } from "react-router-dom";

import linkedin from "../img/linkedin.png";
import email from "../img/email.png";
import phone from "../img/phone.png";
import github from "../img/github.png";
import About from "../About";
import Project from "../Project";
import Contact from "../Contact";
import pourya from "../img/pourya.jpg";
import pourya1 from "../img/pourya1.jpg";
import orange from "../img/orange.jpg";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="title">
          <div>
            <h3 className="myName">Hi , my name is</h3>
            <h1 className="name">Pourya Dehghan</h1>
            <h1 className="job">I build things for the web.</h1>
          </div>
          <div className="information">
            {/* <Link to="/contact" >
                        <h4>Contact</h4>
                    </Link>
                    <Link to="/project" >
                        <h4>Project</h4>
                    </Link>
                    <Link to="/about">
                        <h4>About</h4>
                    </Link> */}
            <div>
              <a href="mailto: poorya.degan@gmail.com">
                <img className="icon" src={email} />
              </a>
            </div>

            <div>
              <a href="https://www.linkedin.com/in/degan90">
                <img className="icon" src={linkedin} />
              </a>
            </div>

            {/* <div className="phone">
                        
                        <a href="tel:4043845765"><img className="icon" src={phone} /></a>
                    </div> */}
            <div>
              <a href="https://github.com/Degan90">
                <img className="icon" src={github} />
              </a>
            </div>
            <div className="btnHome">
              <Button variant="outline-success" href="/resume">
                R
              </Button>
            </div>
          </div>
        </div>

        {/* <div>
            <Col xs={6} md={4}>
                <Image className="firstImage" src={pourya} rounded />
            </Col>
                <img className="firstImage" src={pourya} />
            </div> */}
      </div>
    </div>
  );
};

export default Home;
