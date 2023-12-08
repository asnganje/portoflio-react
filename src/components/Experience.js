import { projects } from "../data";
import 'animate.css';

const Experience = () => {

    const renderedMain = projects.map((item)=> {
                            if(item.id ===1){
                            return (
                                <div key = {item.id} className="sm:flex flex-cols shadow-lg shadow-gray-400">
                                    <div><img  className="h-[60vh] w-[350vh] rounded-md" src={item.icon} alt={item.title} /></div>
                                    <div className="ml-10">
                                        <h2 className="text-3xl text-gray-500 font-bold mb-3 tracking-tighter font-mono">{item.title}</h2>
                                        <p className="font-mono tracking-tighter text-gray-500 text-2xl">{item.description}</p>
                                        <div className="flex space-x-4 mt-5">
                                        {
                                            item.skills.map((skill)=> {
                                                return(
                                                    <div key={skill} className="border cursor-pointer font-mono rounded-md w-[15vh] text-gray-500">
                                                        {skill}
                                                    </div>
                                                )
                                            })
                                        }
                                        </div>
                                        <button className="border-black hover:bg-orange-100 font-mono tracking-tighter rounded-md w-[30-vh] p-2 mt-10 bg-orange-500 text-white text-2xl">
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
                    return (<div key={project.id} className = "col-span-1 mx-5 mt-8 border rounded-md bg-gray-100">
                        <div>
                        <div className="ml-10">
                                        <h2 className="text-3xl text-gray-500 font-bold tracking-tighter font-mono mb-3">{project.title}</h2>
                                        <p className="font-mono text-gray-500 tracking-tighter text-2xl">{project.description}</p>
                                        <div className="flex space-x-4 mt-30">
                                        {
                                            project.skills.map((skill)=> {
                                                return(
                                                    <div key={skill} className="border font-mono tracking-tighter border-black cursor-pointer rounded-md w-full p-3 text-black">
                                                        {skill}
                                                    </div>
                                                )
                                            })
                                        }
                                        </div>
                                        <button className="border-black rounded-md font-mono tracking-tighter w-[30-vh] p-2 mt-10 mb-8 hover:bg-orange-100 bg-orange-500 text-white text-2xl">
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
                <h2 className="text-5xl ml-5 sm:ml-0 font-mono tracking-tighter animate-blink">My Recent Works</h2>

                <div className="border border-b h-0 mt-8 w-[full] sm:w-[120vh] sm:mx-20 mx-5 border-gray-500"></div>
            </div>
            <div className="h-full">
                {renderedMain}
                <div className="container sm:grid grid-cols-3 lg:flex lg:flex-cols">
                    {renderedOtherProjects}
                </div>
            </div>
        </div>
    )
}

export default Experience;