import background from "../img/background.jpg"
import heroes from "../img/heroes.png"
import dotaSimon from "../img/dotaSimon.png"
const Project = () => {
    return (
        <div >
            <div className="projectTitle">
                <h1 >Project</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.
            </p>
            </div>
            <div className="allProject">
                <div className="project1">
                    <div >
                        <h2 >Dota2_Simon</h2>
                        <div className="projectDes">
                            <h5>This is a Simon game which players must repeat random sequences
                            of button by clicking the buttons in corretct order. The diffrences
                            between this game and the other simon games are i used the Dota 2
                            characters's images and sounds to make it more interesting.
                            </h5>
                        </div>
                        <div>
                            <a href="https://hungry-meninsky-f0a920.netlify.app/"><img className="projectImage" src={dotaSimon} /></a>
                        </div>

                    </div>
                </div>
                <div className="project2">

                    <h2 >Dota2 Heroes</h2>
                    <div className="projectDes">
                        <h5>
                        My App is called Dota2 Heroes It's an app that shows the all 
                        the Dota 2 heroes and if you click on hero gives you the detail 
                        and attributes of that hero.
                        </h5>
                    </div>
                    <div>
                        <a href="https://pedantic-edison-4080c1.netlify.app"><img className="projectImage" src={heroes} /></a>
                    </div>
                </div>


                <div className="">

                    <h2 >Project 3</h2>
                    <div className="projectDes">
                        <h5>he standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
                        those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
                        et Malorum" by Cicero are also reproduced in their exact original form,
                        accompanied by English versions from the 1914 translation by H. Rackham.
                       </h5>
                    </div>
                    <div>
                        <img className="projectImage" src={background} />
                    </div>


                </div>
                <div className="project2">

                    <h2 >Project 4</h2>
                    <div className="projectDes">
                        <h5>he standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
                        those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
                        et Malorum" by Cicero are also reproduced in their exact original form,
                        accompanied by English versions from the 1914 translation by H. Rackham.
                       </h5>
                    </div>
                    <div>
                        <img className="projectImage" src={background} />
                    </div>


                </div>

            </div>
        </div>

    )
}

export default Project