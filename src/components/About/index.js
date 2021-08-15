import about from "../img/about.jpg";
import html from "../img/html.png";
import css from "../img/css.png";
import js from "../img/js.png";
import react from "../img/react.png";
import python from "../img/python.png";
import ps from "../img/ps.png";
import lr from "../img/lr.png";
import dj from "../img/dj.png";
import github from "../img/githubicon.png";
import bt from "../img/bt.png";
import mdb from "../img/mdb.png";
import psql from "../img/psql.png";
import pourya from "../img/pourya.jpg";
const About = () => {
  return (
    <div className="allAbout">
      <div> <h1 className="aboutTitle">About</h1></div>
    
      <div></div>
      <div className="aboutDes">
        <p>
          Hello World, I'm Pourya Dehghan a passionate full stack developer.
          I started my coding journey two years ago, I feel really lucky that my job
          is my biggest hobbies. I'm eager to make the leap and continue refining my skills
          with the right company.
        </p>
        <div className="skills">
            <div>
            <h1 className="skillTitle">Here are a few tecknologies I've been working:</h1>
            </div>
       <div>
        <div className="firstInfo">
          <img className="aboutIcon" src={html} />
          <img className="aboutIcon" src={css} />
          <img className="aboutIcon" src={js} />
          <img className="aboutIcon" src={react} />
          <img className="aboutIcon" src={python} />
          <img className="aboutIcon" src={dj} />
        </div>
        <div>
          <img className="aboutIcon" src={github} />
          <img className="aboutIcon" src={bt} />
          <img className="aboutIcon" src={mdb} />
          <img className="aboutIcon" src={psql} />
          <img className="aboutIcon" src={ps} />
          <img className="aboutIcon" src={lr} />
        </div>
        </div>
      </div>
      </div>
      <div>
        <img className="aboutImage" src={pourya} />
      </div>
 
    </div>
  );
};

export default About;
