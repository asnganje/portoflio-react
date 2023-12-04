import { socials } from "../data";
const Footer = () => {
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
        <footer className="bg-gray-900 border rounded-md py-4 mx-3 mb-3">
            <div className="container mx-auto flex justify-center">
            <hr/>
                <ul className="flex space-x-4">
                    {renderedSocials}
                </ul>
            </div>
        </footer>
    )
}
export default Footer;