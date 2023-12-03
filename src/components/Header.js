import {FaBars} from 'react-icons/fa6'
import { FaX } from "react-icons/fa6";
import { navData } from "../data";
import { identify } from "../data";
import { useMediaQuery } from "react-responsive";
import { useState } from 'react';

const Header = () => {
    const isSmallScreen = useMediaQuery({maxWidth: 768})
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const showMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }

    const hideMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }
    
    const navItems = navData.map((item)=> {
        return (<li key={item.id} className="text-white text-xl hover:font-bold">
                {item.name}
                </li>)
    })

    return(
        <header className="flex justify-between bg-gray-500 p-4 mx-3">
            <h3 className="text-xl font-bold text-white cursor-pointer mb:4 md: mb:0">{identify}</h3>
            {isSmallScreen?
                (
                    <>
                    {!isMenuOpen && <FaBars onClick={showMenu} className='text-white hover:text-gray-300 focus:outline-none mt-2 cursor-pointer ml-auto' size={30} />}
                    <div className='flex flex-col items-end'>
                    {isMenuOpen && <FaX onClick={hideMenu} className='text-white hover:text-gray-300 focus:outline-none mt-2 mb-3 cursor-pointer' size={30} />}
                    {isMenuOpen && <ul className="flex items-end flex-col space-y-2">
                    {navItems}
                    </ul>}
                    </div>
                    </>
                ):
                (<ul className="flex flex-wrap space-x-4 cursor-pointer md: space-x-10 md:-mx:10">
                {navItems}
                </ul>)
            }
        </header>
    )
}
export default Header