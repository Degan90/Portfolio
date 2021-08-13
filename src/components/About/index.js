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
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like)
        </p>
        <div className="skills">
            <div>
            <h1 className="skillTitle">Here are a few tecknologies I've been working:</h1>
            </div>
       <div>
        <div>
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
