import './intro.scss'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { init } from 'ityped'
import {useEffect, useRef} from 'react';

export default function Intro() {
    const textRef = useRef();
    useEffect(() =>{
        init(textRef.current, { showCursor: false,typeSpeed:  50,backDelay:  1500, strings: ['Web Developer', 'Python Engineer',
            'Software Engineer'] })
    },[]);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/mine.jpg" alt="My profile"></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Siddharth Porwal</h1>
                    <h3>&lt;<span ref={textRef}></span>&gt;</h3>
                    <div class='about'>
                        <p>A tech-savvy mortal, currently working and learning to excel in Cyber Security and Data Science</p>
                    </div>
                    <div className='contact-me'>
                        <a href="https://github.com/sidd8rth" target="_blank" rel="noreferrer"><GitHubIcon className='icon'/></a>
                        <a href="https://www.linkedin.com/in/siddharth-porwal-757490193/" target="_blank" rel="noreferrer"><LinkedInIcon className='icon'/></a>
                        <a href="https://www.instagram.com/__.sidd8rth._/" target="_blank" rel="noreferrer"><InstagramIcon className='icon'/></a>
                        <a href="https://twitter.com/silicon25_7" target="_blank" rel="noreferrer"><TwitterIcon className='icon'/></a>
                    </div>
                    <div>
                        <a href='#about'>
                            <KeyboardArrowDownIcon className='arrow'/>
                        </a>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
