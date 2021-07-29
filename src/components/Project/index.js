import background from "../img/background.jpg"
import heroes from "../img/heroes.png"
import dotaSimon from "../img/dotaSimon.png"
import Carousel from 'react-bootstrap/Carousel'
import { useState } from "react"
const Project = () => {
    
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
      
    return (


        <section className="allProject">
            <div className="projectTitle">
                <h1 >Projects</h1>
            </div>
            <div className="project">

                <div >
                    <a href="https://hungry-meninsky-f0a920.netlify.app/"><img className="projectImage" src={dotaSimon} /></a>
                </div>
                <div className="projectDes">
                    <h2 >Dota2_Simon</h2>
                    <div >
                        <h5>This is a Simon game which players must repeat random sequences
                        of button by clicking the buttons in corretct order. The diffrences
                        between this game and the other simon games are i used the Dota 2
                        characters's images and sounds to make it more interesting.
                        </h5>
                    </div>
                </div>



            </div>
            <div className="project">
                <div className="projectDes1">
                    <h2 >Dota2 Heroes</h2>
                    <div >
                        <h5>
                            My App is called Dota2 Heroes It's an app that shows the all
                            the Dota 2 heroes and if you click on hero gives you the detail
                            and attributes of that hero.
                    </h5>
                    </div>
                </div>
                <div>
                    <a href="https://pedantic-edison-4080c1.netlify.app"><img className="projectImage" src={heroes} /></a>
                </div>
            </div>


            <div className="project">
                <div>
                    <img className="projectImage" src={background} />
                </div>
                <div>
                    <h2 >Project 3</h2>
                    <div className="projectDes">
                        <h5>he standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
                        those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
                        et Malorum" by Cicero are also reproduced in their exact original form,
                        accompanied by English versions from the 1914 translation by H. Rackham.
                   </h5>
                    </div>
                </div>



            </div>
            <div className="project">
                <div>
                    <h2 >Project 4</h2>
                    <div className="projectDes">
                        <h5>he standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
                        those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
                        et Malorum" by Cicero are also reproduced in their exact original form,
                        accompanied by English versions from the 1914 translation by H. Rackham.
                   </h5>
                    </div>
                </div>
                <div>
                    <img className="projectImage" src={background} />
                </div>


            </div>

        </section>

      


    )
}

export default Project;
