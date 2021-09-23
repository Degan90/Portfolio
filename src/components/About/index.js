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
import docker from "../img/docker.png";
import psql from "../img/psql.png";
import pourya from "../img/pourya.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="allAbout">
      <div>
        {" "}
        <h1 className="aboutTitle">About</h1>
      </div>

      <div></div>
      <div className="aboutDes">
        <p>
          Hello World, I'm Pourya Dehghan a passionate full stack developer with
          a background of petrochemical engineering education and design. My
          favorite part of coding is designing a mobile app or website, and I
          have a keen eye for design. The most exiting moment for me is
          debugging and squashing bugs, especially when I can use the mathematic
          and algorithmic backgrounds that I learned in university. My previous
          work in design and photography industry helps me figure out where
          things belong online; I want to make beautiful user experiences so
          that anyone can enjoy the web. I'm eager to make the leap into full
          stack and continue refining my skills with the right company and team.
        </p>
        <div className="skills">
          <div>
            <h1 className="skillTitle">
              Here are a few tecknologies I've been working:
            </h1>
          </div>
          <div>
            <div className="firstInfo">
              <motion.img
                whileTap={{ scale: 0.8 }}
                dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                className="aboutIcon"
                src={html}
              />
              <motion.img
                whileTap={{ scale: 0.8 }}
                dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                className="aboutIcon"
                src={css}
              />
              <motion.img
                whileTap={{ scale: 0.8 }}
                dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
                className="aboutIcon"
                src={js}
              />
              <motion.img
                whileTap={{ scale: 0.8 }}
                dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
                className="aboutIcon"
                src={react}
              />
              <motion.img
                whileTap={{ scale: 0.8 }}
                dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 2.5 } }}
                className="aboutIcon"
                src={python}
              />
              <motion.img
                whileTap={{ scale: 0.8 }}
                dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 3 } }}
                className="aboutIcon"
                src={dj}
              />

              {/* <img className="aboutIcon" src={html} />
          <img className="aboutIcon" src={css} />
          <img className="aboutIcon" src={js} />
          <img className="aboutIcon" src={react} />
          <img className="aboutIcon" src={python} />
          <img className="aboutIcon" src={dj} /> */}
            </div>
            <div>
              <motion.img
                whileTap={{ scale: 0.8 }}
                dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 3.5 } }}
                className="aboutIcon"
                src={github}
              />
              <motion.img
                whileTap={{ scale: 0.8 }}
                dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 6 } }}
                className="aboutIcon"
                src={docker}
              />
              <motion.img
                whileTap={{ scale: 0.8 }}
                dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 4 } }}
                className="aboutIcon"
                src={bt}
              />
              <motion.img
                whileTap={{ scale: 0.8 }}
                dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 4.5 } }}
                className="aboutIcon"
                src={mdb}
              />
              <motion.img
                whileTap={{ scale: 0.8 }}
                dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 5 } }}
                className="aboutIcon"
                src={psql}
              />
              <motion.img
                whileTap={{ scale: 0.8 }}
                dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 5.5 } }}
                className="aboutIcon"
                src={ps}
              />
              {/* <img className="aboutIcon" src={github} />
              <img className="aboutIcon" src={bt} />
              <img className="aboutIcon" src={mdb} />
              <img className="aboutIcon" src={psql} />
              <img className="aboutIcon" src={ps} />
              <img className="aboutIcon" src={lr} /> */}
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
