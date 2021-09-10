import linkedin from "../img/linkedin.png"
import email from "../img/email.png"

import github from "../img/github.png"


const Contact = () => {
    return (

        <div className="contact" >
            <h1 className="contactTitle">GET IN TOUCH</h1>
            <div className="allContact" >
                
                <div>
                    <img className="icon" src={email} />
                    <a href="mailto: poorya.degan@gmail.com" className="ap">poorya.degan@gmail.com</a>
                </div>
               
                
                <div>
                    <img className="icon" src={linkedin} />
                    <a href="https://www.linkedin.com/in/degan90" className="ap">www.linkedin.com/in/degan90</a>
                </div>

                <div> 
                  <img className="icon" src={github} />  
                  <a href="https://github.com/Degan90" className="ap">https://github.com/Degan90</a>
                 </div>



            </div>
        
        </div>
    )
}

export default Contact;