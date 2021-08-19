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
          Hello World, I'm Pourya Dehghan a passionate full stack developer. I
          started my coding journey two years ago, I feel really lucky that my
          job is my biggest hobby. I'm eager to make the leap and continue
          refining my skills with the right company.
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
              <motion.img
                whileTap={{ scale: 0.8 }}
                
                dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 6 } }}
                className="aboutIcon"
                src={lr}
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
