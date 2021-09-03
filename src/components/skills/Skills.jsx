import './skills.scss'
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

export default function Skills() {
    return (
        <div className="skills" id="skills">
            <h1>My Skills</h1>
            <ul className="skill-container">
                <li className="skill-item">
                    <img src="assets/skills/python.png" alt="Python Logo"/>
                    <h3>Python</h3>
                    <div>
                        <p className="item-paragraph">Core Python Expertise. Familiar
                            with Data Analysis libraries Pandas, Numpy, Scikit Learn and ML</p>
                    </div>
                </li>
                <li className="skill-item">
                    <img src="assets/skills/programming.png" alt="Web Development logo"/>
                    <h3>Full Stack Web Development</h3>
                    <div>
                        <p className="item-paragraph">HTML/CSS, JavaScript well versed with
                            various frameworks as jQuery, Bootstrap, MERN Developer.</p>
                    </div>
                </li>
                <li className="skill-item">
                    <img src="assets/skills/version-control.png" alt="Version Control logo"/>
                    <h3>Version Control With Git</h3>
                    <div>
                        <p className="item-paragraph">Version Control with Git/Github and
                        very good in development in community.</p>
                    </div>

                </li>
            </ul>
            <ul className="skill-container">
                <li className="skill-item">
                    <img src="assets/skills/leadership.png" alt="Leadership Icon"/>
                    <h3>Leadership Skills</h3>
                    <div>
                        <p className="item-paragraph">Confident with the decisions, I take and always ready
                            to take responsibility for anything setback.</p>
                    </div>
                </li>
                <li className="skill-item">
                    <img src="assets/skills/problem-solving.png" alt="Problem Solving"/>
                    <h3>Problem Solving Skills</h3>
                    <div>
                        <p className="item-paragraph">Problems are something that makes our life happening
                        and I am always ready to face and conquer them.</p>
                    </div>
                </li>
                <li className="skill-item">
                    <img src="assets/skills/skill.png" alt="Good Communication"/>
                    <h3>Communication Skills</h3>
                   <div>
                       <p className="item-paragraph">Listening quietly is my key to good communication skills
                       helps me in understanding someone very well.</p>
                   </div>
                </li>
            </ul>
            <div>
                <a href='#portfolio'>
                    <KeyboardArrowDownIcon className='arrow'/>
                </a>
            </div>
        </div>
    )
}
