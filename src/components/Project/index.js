import background from "../img/background.jpg";
import heroes from "../img/heroes.jpg";
import dotaSimon from "../img/dotaSimon.png";
import project3 from "../img/project3.png";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import greengh from "../img/greengh.png";
import denj from "../img/denj.png";
const Project = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <h1 className="projectTitle">The Applications I've built</h1>

      <section className="allProject">
        <div className="project">
          <div>
            <h2>Denj</h2>
            <div className="projectDes">
              <h5>
                This is a full stack mobile application that i created it with React Native.
                This application is about cozy places that users have been and they want to share 
                with other people.


              </h5>
              <div>
                <a href="https://github.com/Degan90/Denj-client.git">
                  <img className="icon" src={greengh} />
                </a>
          <div>
            <a target="_blank">
            <img className="denj" src={denj} />
            </a>
          </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div>
            <h2>Agora 3</h2>
            <div className="projectDes">
              <h5>
                This is the full stack appliacation that we created as a group.
                This is a online application for discussions on a forum based on
                topics and decriptions. Each forum has their own posts which is
                fully functional.
              </h5>
            <div>
              <a href="https://github.com/SEIR-Angelica-Project-3/Agora-client.git"   >
                <img className="icon" src={greengh} />
              </a>
            </div>
            </div>
          <div>
            <a href="https://agoraforum.netlify.app/" target="_blank">
            <img className="projectImage" src={project3} />
            </a>
          </div>
          </div>
        </div>
        <div className="project">
          <div className="projectDes">
            <h2>Dota2 Heroes</h2>

            <h5>
              My App is called Dota2 Heroes It's an app that shows the all the
              Dota 2 heroes and if you click on hero gives you the detail and
              attributes of that hero.
            </h5>
            <div>
              <a href="https://github.com/Degan90/Dota2-Heroes.git">
                <img className="icon" src={greengh} />
              </a>
            </div>
          </div>

          <div>
            <a href="https://pedantic-edison-4080c1.netlify.app" target="_blank">
              <img className="projectImage" src={heroes} />
            </a>
          </div>
        </div>
        <div className="project">
          <div className="projectDes">
            <h2>Dota2_Simon</h2>

            <h5>
              This is a Simon game which players must repeat random sequences of
              button by clicking the buttons in corretct order. The diffrences
              between this game and the other simon games are i used the Dota 2
              characters's images and sounds to make it more interesting.
            </h5>
            <div>
              <a href="https://github.com/Degan90/Simon-Dota.git">
                <img className="icon" src={greengh} />
              </a>
            </div>
          </div>

          <div>
            <a href="https://hungry-meninsky-f0a920.netlify.app/" target="_blank">
              <img className="projectImage" src={dotaSimon} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
