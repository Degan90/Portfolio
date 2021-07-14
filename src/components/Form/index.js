import { useState } from "react";

const Form = () => {
    const [value, setValue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        setValue("")
    }
    const handleChange = (e) => {
        setValue(e.target.value);


    }
    return (
        <form onSubmit={handleSubmit} >
            <div className="fform">
            <div className="info">
                <label >Name *</label>
                <input type="text" className="input" id="name" placeholder="Enter Your Name" onChange={handleChange} value={value} />
            </div>
            <div className="info">
                <label >Email *</label>
                <input type="email" className="input" id="email" placeholder="Enter Your Email" onChange={handleChange} value={value} />
            </div>
            <div className="info">
                <label >Phone</label>
                <input type="number" className="input" id="phone" placeholder="Enter Your Phone Number" onChange={handleChange} value={value} />
            </div>
            <div className="info">
                <label >Address</label>
                <input type="address" className="input" id="address" placeholder="Enter Your Address" onChange={handleChange} value={value} />
            </div>
            </div>
            <div className="sform">
            <div className="info">
                <label >Subject</label>
                <input type="text" className="input" id="subject" placeholder="Enter Your Subject" onChange={handleChange} value={value} />
            </div>
            <div className="info">
                <label >Message</label>
                <input type="textarea" className="input" id="message" placeholder="Enter Your Message" onChange={handleChange} value={value} />
            </div>

            </div >
            <input type="submit" className="btn" />
            
        </form>
    )
}

export default Form;