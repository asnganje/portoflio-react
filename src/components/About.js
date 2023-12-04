import circle from '../assets/circle.svg'
import rectangle from '../assets/Rectangle.svg'
import square from '../assets/square.svg'

const About = () => {
    return(
        <div>
            <div>
                <h3>About</h3>
                <p>Hello I’m a software developer! I can help you build a product , 
                    feature or website Look through some of my work and experience! 
                    If you like what you see and have a project you need coded, 
                    don’t hestiate to contact me.
                </p>
                <button>Get My Resume</button>
            </div>
            <div><hr/></div>
            <div>
                <h3><img src={rectangle} alt="rectangle"/>Language</h3>
                <ul>
                    <li>Javascript</li>
                    <li>Ruby</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                </ul>
            </div>
            <div>
            <h3><img src={circle} alt="circle"/>Frameworks</h3>
                <ul>
                    <li>ReactJs</li>
                    <li>Redux</li>
                    <li>Tailwind</li>
                    <li>NodeJs</li>
                    <li>Ruby on Rails</li>
                    <li>RSPec</li>
                    <li>CapyBara</li>
                </ul>
            </div>
            <div>
            <h3><img src={square} alt="square"/>Skills</h3>
                <ul>
                    <li>CodeKit</li>
                    <li>Github</li>
                    <li>CodePen</li>
                    <li>Gitlab</li>
                    <li>Terminal</li>
                </ul>
            </div>
        </div>
    )
}

export default About;