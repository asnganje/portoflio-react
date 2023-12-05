import { socials } from "../data";
import initialImg from "../assets/introImg.png"
import { useMediaQuery } from "react-responsive";

const Intro = ()=> {
    const isSmallScreen = useMediaQuery({maxWidth:1115})

    const renderedSocials = socials.map((item)=> {
        return(
            <li key={item.id}>
                <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                >
                    <img 
                    src={item.name} 
                    alt={item.name} 
                    className="text-black fill-current"
                    />
                </a>
            </li>
        )
    })
 
    return(
        <article>
        {isSmallScreen? (<div className="flex flex-col-reverse mx-3 bg-black h-[50vh] items-center">
            <div className="mx-5">
                <ul className="flex space-x-5 mt-8 mb-10">
                    {renderedSocials}
                </ul>
            </div>
            <div className="ml-5 space-y-4">
                <h1 className="text-orange-500 text-4xl font-bold">Hey There. I’m Nganje</h1>
                <h3 className="text-white font-bold">I’m a Software Developer</h3>
                <p className="text-white">
                I can help you build a product , feature or website 
                Look through some of my work and experience!<br/> If you like what you see and have a project
                 you need coded, don’t hestitate to contact me.
                </p>
            </div>
        </div>):
        (
            <div className="flex mx-3 bg-black h-[90vh] items-center bg-contain bg-no-repeat bg-right" style={{ backgroundImage: `url(${initialImg})`}}>
            <div className="mx-5">
                <ul className="space-y-5">
                    {renderedSocials}
                </ul>
            </div>
            <div className="space-y-4">
                <h1 className="text-orange-500 text-4xl font-bold">Hey There. I’m Nganje</h1>
                <h3 className="text-white font-bold">I’m a Software Developer</h3>
                <p className="text-white">
                I can help you build a product , feature or website 
                Look through some of my work and experience!<br/> If you like what you see and have a project
                 you need coded, don’t hestitate to contact me.
                </p>
            </div>
        </div>
        )}
        </article>
    )
}
export default Intro;