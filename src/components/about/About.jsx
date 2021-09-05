import './about.scss';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {useEffect,useState} from 'react';
import AboutList from "../aboutList/AboutList";
import {
    educationAbout,
    experienceAbout, responsibilityAbout
} from "../../dataAbout";

export default function About() {
    const [selected, setSelected] = useState("education");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "education",
            title: "Education",
        },
        {
            id: "experience",
            title: "Work Experience",
        },
        {
            id: "responsibility",
            title: "Position of Responsibility",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "education":
                setData(educationAbout);
                break;
            case "responsibility":
                setData(responsibilityAbout);
                break;
            case "experience":
                setData(experienceAbout);
                break;
            default:
                setData(educationAbout);
        }
    }, [selected]);

    return (
        <div className='aboutSection' id='about'>
            <div className='left'>
                <div className='wrapper'>
                    <div className='about'>
                        <h1>About Me</h1>
                        <p>I am a pre-final year Student pursuing Bachelor of Technology in Information Technology from
                            'Shri G. S. Institute of Technology and Science, Indore'. My interests in engineering field resides in
                            web design and development, machine learning, data science, artificial intelligence and
                            cyber security. Exploring and working on the latest technologies excites me.
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
                <ul>
                    {list.map((item) => (
                        <AboutList
                            title={item.title}
                            active={selected === item.id}
                            setSelected={setSelected}
                            id={item.id}
                        />
                    ))}
                </ul>
                <div className="container">
                    {data.map((d) => (
                        <div className="item">
                            <h1>{d.title}</h1>
                            <h2>{d.score}</h2>
                            <p style={{color: "#777777"}}>{d.year}</p>
                            <p style={{color: "#777777"}}>{d.org}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
