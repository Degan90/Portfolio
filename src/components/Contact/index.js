import linkedin from "../img/linkedin.png"
import email from "../img/email.png"
import phone from "../img/phone.png"
import github from "../img/github.png"

import Form from "../Form"
const Contact = () => {
    return (

        <div >
            <h1>GET IN TOUCH</h1>
            <div className="allContact" >
                
                <div>
                    <img className="icon" src={email} />
                    <a href="mailto: poorya.degan@gmail.com">poorya.degan@gmail.com</a>
                </div>
               
                
                <div>
                    <img className="icon" src={linkedin} />
                    <a href="https://www.linkedin.com/in/degan90">www.linkedin.com/in/degan90</a>
                </div>

                <div> 
                  <img className="icon" src={github} />  
                  <a href="https://github.com/Degan90">https://github.com/Degan90</a>
                 </div>



            </div>
        
        </div>
    )
}

export default Contact;