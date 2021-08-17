import linkedin from "../img/linkedin.png";
import email from "../img/email.png";
import github from "../img/github.png";
import { Button } from "react-bootstrap";
import pdf from "../PDF/Resume.PDF";
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
            <div>
              <a href="mailto: poorya.degan@gmail.com" target="_blank">
                <img className="icon" src={email} />
              </a>
            </div>

            <div>
              <a href="https://www.linkedin.com/in/degan90" target="_blank">
                <img className="icon" src={linkedin} />
              </a>
            </div>
            <div>
              <a href="https://github.com/Degan90" target="_blank">
                <img className="icon" src={github} />
              </a>
            </div>
            <div className="btnHome">
              <Button variant="outline-success" target="_blank" href="/resume" href={pdf}>
                R
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
