import linkedin from "../img/linkedin.png";
import email from "../img/email.png";
import github from "../img/github.png";
import { Button } from "react-bootstrap";
import pdf from "../PDF/resume(updated).pdf";
import { motion } from "framer-motion";

const Home = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div>
      <div className="home">
        <div className="title">
          <div>
            
            <motion.h3
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: .5 }}
              className="myName"
            >
              Hi , my name is
            </motion.h3>
            {/* <h1 className="name">Pourya Dehghan</h1> */}
            <motion.h1
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
              className="name"
            >
              Pourya Dehghan
            </motion.h1>
            <motion.h1
              className="job"
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 2 }}
            >
              I build things for the web.
            </motion.h1>
            {/* <h1 className="job">I build things for the web.</h1> */}
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
              <Button
                variant="outline-success"
                target="_blank"
                href="/resume"
                href={pdf}
              >
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
