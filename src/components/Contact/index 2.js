import linkedin from "../img/linkedin.png"
import email from "../img/email.png"
import phone from "../img/phone.png"
import Form from "../Form"
const Contact = () => {
    return (

        <div className="allContact">
            <div >
                <h1>GET IN TOUCH</h1>
                <div>
                    <img className="icon" src={email} />
                    <a href="mailto: poorya.degan@gmail.com">poorya.degan@gmail.com</a>
                </div>
               
                
                <div>
                    <img className="icon" src={linkedin} />
                    <a href="https://www.linkedin.com/in/degan90">www.linkedin.com/in/degan90</a>
                </div>

                <div className="phone">
                   <img className="icon" src={phone} />
                   <a href="tel:4043845765">(404)384-5765</a>
                </div>



            </div>
            {/* <div>
                <Form />
            </div> */}

        </div>
    )
}

export default Contact;