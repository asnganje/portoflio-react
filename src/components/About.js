import circle from '../assets/circle.svg'
import rectangle from '../assets/Rectangle.svg'
import square from '../assets/square.svg'
import lgBackground from '../assets/aboutLg.png'
import { useMediaQuery } from "react-responsive";

const About = () => {
    const isSmallScreen = useMediaQuery({maxWidth:1115})
    
    return(
        <div className = "md:grid grid-cols-3 flex flex-col border rounded-md gap-4 mx-3 bg-black">
            {isSmallScreen? (<div className = "col-span-3 p-5 mb-8">
                <h3 className="text-6xl font-bold text-orange-500 mb-4">About me</h3>
                <p className= "text-white text-2xl">Hello I’m a software developer! I can help you build a product , 
                    feature or website Look through some of my work and experience! 
                    If you like what <br/> you see and have a project you need coded, 
                    don’t hestiate to contact me.
                </p>
                <button className="border rounded-md w-[30-vh] p-2 mt-3 bg-orange-500 text-white text-2xl">Get My Resume</button>
            </div>): (
                <div className = "col-span-3 p-5 mb-10 bg-contain h-[50vh] bg-no-repeat bg-right" style={{ backgroundImage: `url(${lgBackground})`}}>
                <h3 className="text-6xl font-bold text-orange-500 mb-4">About me</h3>
                <p className= "text-white text-xl">Hello I’m a software developer! I can help you <br/> build a product , 
                    feature or website Look through some of my work <br/> and experience! 
                    If you like what you see and have a project you need <br/> 
                    coded, don’t hestiate to contact me.
                </p>
                <button className="border-black rounded-md w-[30-vh] p-2 mt-10 bg-orange-500 text-white text-2xl">Get My Resume</button>
            </div>
            )}
            <div className = "ml-10">
                <h3 className = "flex gap-3 text-white text-4xl"><img src={rectangle} alt="rectangle"/>Language</h3>
                <ul className = "flex flex-col ml-10 italic space-y-3 mb-4 mt-4 text-white text-xl">
                    <li>Javascript</li>
                    <li>Ruby</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                </ul>
            </div>
            <div className = "ml-10">
            <h3 className = "flex gap-3 ml-4 text-white text-4xl"><img src={circle} alt="circle"/>Frameworks</h3>
                <ul className = "flex flex-col ml-10 italic space-y-3 mb-4 mt-4 text-white text-xl">
                    <li>ReactJs</li>
                    <li>Redux</li>
                    <li>Tailwind</li>
                    <li>NodeJs</li>
                    <li>Ruby on Rails</li>
                    <li>RSPec</li>
                    <li>CapyBara</li>
                </ul>
            </div>
            <div className='ml-10'>
            <h3 className = "flex gap-3 ml-4 text-white text-4xl"><img src={square} alt="square"/>Skills</h3>
                <ul className = "flex flex-col ml-10 italic space-y-3 mb-4 mt-4 text-white text-xl">
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