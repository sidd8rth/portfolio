import './about.scss';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { init } from 'ityped'
import {useEffect, useRef} from 'react';

export default function About() {
    const textRef = useRef();
    useEffect(() =>{
        init(textRef.current, {
            showCursor: false,
            typeSpeed:  50,
            backDelay:  1500,
            strings: ['10th : 90.',] })
    },[]);
    return (
        <div className='aboutSection' id='about'>
            <div className='left'>
                <div className='wrapper'>
                    <div className='about'>
                        <h1>About Me</h1>
                        <p>I am a pre-final year Student pursuing Bachelor of Technology in Information Technology from
                            'Shri G. S. Institute of Technology and Science, Indore'.I have keen interest in diplomacy and
                            programming. As a technology enthusiast , i want to be to optimize, customize and tinker whatever
                            I get just like an hacker. Want to build a good environment where cybersecurity threat is no longer present.
                        </p>
                    </div>
                    <div className='arrow-down'>
                        <a href='#skills'>
                            <KeyboardArrowDownIcon className='arrow'/>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className='right'>
                <div className='education'>
                    <h1 className='edu-head'>Education</h1>
                   <div className='total-edu'>
                       <div className='edu-div'>
                           <h2>B.Tech</h2>
                           <h2>82.50 %</h2>
                           <p className='year'>August 2019 - June 2023</p>
                           <p>Shri G. S. Institute of Technology, Indore</p>
                       </div>
                       <div className='edu-div'>
                           <h2>XII Standard</h2>
                           <h2>90.80 %</h2>
                           <p className='year'>March 2017 - March 2018 </p>
                           <p>Shri Guru Tegh Bahadur Academy, Ratlam</p>
                       </div>
                       <div className='edu-div'>
                           <h2>X Standard</h2>
                           <h2>91.20 %</h2>
                           <p className='year'>March 2015 - March 2016 </p>
                           <p>Shri Guru Tegh Bahadur Academy, Ratlam</p>
                       </div>
                   </div>
                </div>
                <div className='experience'>
                    <h1 className='exp-head'>Experience</h1>
                    <div className='total-exp'>
                        <div className='exp-div'>
                            <h2>Placement Coordinator</h2>
                            <p className='year'>May 2021 - Present </p>
                            <p>Shri G. S. Institute of Technology, Indore</p>
                        </div>
                        <div className='exp-div'>
                            <h2>House Captain</h2>
                            <p className='year'>June 2016 - March 2018 </p>
                            <p>Shri Guru Tegh Bahadur Academy, Ratlam</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
