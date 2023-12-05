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
                <hr className='block lg:hidden w-full'/>
                </li>)
    })

    return(
        <header className="flex justify-between bg-gray-900 p-4 mx-3">
            <h3 className="text-xl font-bold text-white cursor-pointer mb:4 md: mb:0">{identify}</h3>
            {isSmallScreen?
                (
                    <>
                    {!isMenuOpen && <FaBars onClick={showMenu} className='text-white hover:text-gray-300 focus:outline-none mt-2 cursor-pointer ml-auto' size={30} />}
                    {isMenuOpen && <div className= "fixed inset-0 overflow-y-auto mx-3">
                            <div className="absolute w-full h-full space-y-2 bg-black opacity-1.5">
                                <div className='absolute top-0 right-0'>
                                <FaX
                                    onClick={hideMenu}
                                    className="text-white text-4xl hover:text-gray-300 mt-5 mx-3 ml-100 focus:outline-none cursor-pointer"
                                    size={30}
                                />
                                </div>
                                <div className='absolute top-20 left-5 cursor-pointer'>
                                    <ul className='space-y-5'>
                                    {navItems}
                                    </ul>
                                </div> 
                            </div>                        
                        </div>}
                    </>
                ):
                (<ul className="flex flex-wrap space-x-4 cursor-pointer">
                {navItems}
                </ul>)
            }
        </header>
    )
}
export default Header