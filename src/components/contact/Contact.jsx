import { useState } from "react";
import emailjs from 'emailjs-com';
import "./contact.scss";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const Result =() =>{
    return(
        <p> Message sent, I'll reply you asap!</p>
    )
}
export default function Contact() {
    const [message, setMessage] = useState(false);
    const sendEmail =(e) => {
        e.preventDefault();

        emailjs.sendForm('service_5cmg0k4', 'template_1i0e4m4', e.target, 'user_Ghaasu7QU0alXNj1OMIs0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={sendEmail}>
                    <input type="text" name='fullName' placeholder="Full Name" required/>
                    <input type="text" name='email'  placeholder="Email" required/>
                    <input type="text" name='phone' placeholder="Mobile Number" />
                    <textarea name='message' placeholder="Message"required></textarea>
                    <button type="submit">Send</button>
                    <span>{message ? <Result/> : null}</span>
                </form>
                <div className='contact-me'>
                    <a href="https://github.com/sidd8rth" target="_blank" rel="noreferrer"><GitHubIcon className='icon'/></a>
                    <a href="https://www.linkedin.com/in/siddharth-porwal-757490193/" target="_blank" rel="noreferrer"><LinkedInIcon className='icon'/></a>
                    <a href="https://www.instagram.com/__.sidd8rth._/" target="_blank" rel="noreferrer"><InstagramIcon className='icon'/></a>
                    <a href="https://twitter.com/silicon25_7" target="_blank" rel="noreferrer"><TwitterIcon className='icon'/></a>
                </div>
            </div>
        </div>
    );
}