import { projects } from "../data";
import 'animate.css';

const Experience = () => {

    const renderedMain = projects.map((item)=> {
                            if(item.id ===1){
                            return (
                                <div key = {item.id} className="sm:flex flex-cols mt-5">
                                    <div><img  className="h-[60vh] w-[350vh]" src={item.icon} alt={item.title} /></div>
                                    <div className="ml-10">
                                        <h2 className="text-3xl font-bold mb-3 font-sans">{item.title}</h2>
                                        <p className="font-sans text-2xl">{item.description}</p>
                                        <div className="flex space-x-4 mt-5">
                                        {
                                            item.skills.map((skill)=> {
                                                return(
                                                    <div key={skill} className="border cursor-pointer border-black rounded-md w-[15vh] p-3 text-black">
                                                        {skill}
                                                    </div>
                                                )
                                            })
                                        }
                                        </div>
                                        <button className="border-black hover:bg-orange-100 rounded-md w-[30-vh] p-2 mt-10 bg-orange-500 text-white text-2xl">
                                            <a href={item.url}  
                                            target="_blank" 
                                            rel="noopener noreferrer">
                                                See more
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            )
                            }
                            return null
                        }
                        )
    const renderedOtherProjects = projects.map((project)=> {
                                    if(project.id !== 1){
                    return (<div key={project.id} className = "col-span-1 mx-5 mt-8 border rounded-md bg-gray-300">
                        <div>
                        <div className="ml-10">
                                        <h2 className="text-3xl font-bold mb-3 font-sans">{project.title}</h2>
                                        <p className="font-sans text-2xl">{project.description}</p>
                                        <div className="flex space-x-4 mt-5">
                                        {
                                            project.skills.map((skill)=> {
                                                return(
                                                    <div key={skill} className="border border-black cursor-pointer rounded-md w-full p-3 text-black">
                                                        {skill}
                                                    </div>
                                                )
                                            })
                                        }
                                        </div>
                                        <button className="border-black rounded-md w-[30-vh] p-2 mt-10 mb-8 hover:bg-orange-100 bg-orange-500 text-white text-2xl">
                                            <a href={project.url}  
                                            target="_blank" 
                                            rel="noopener noreferrer">
                                                See more
                                            </a>
                                        </button>
                                    </div>
                        </div>
                    </div>)
                    }
        return null;
    }) 
    return(
        <div className="mx-3">
            <div className="flex flex-col sm:flex-row ">
                <h2 className="text-5xl ml-5 sm:ml-0 animate-blink text-2xl">My Recent Works</h2>

                <div className="border border-b h-0 mt-8 w-[full] sm:w-[120vh] sm:mx-20 mx-5 border-gray-500"></div>
            </div>
            <div className="h-full">
                {renderedMain}
                <div className="sm:grid grid-cols-3 lg:flex lg:flex-cols">
                    {renderedOtherProjects}
                </div>
            </div>
        </div>
    )
}

export default Experience;