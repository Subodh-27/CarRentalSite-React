import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

import ResponsiveMenu from "./ResponsiveMenu.jsx";

export const NavLinks = [
    {
        id: "1",
        name: "Home",
        link: "/#"
    },
    {
        id: "2",
        name: "Cars",
        link: "/#cars"
    },
    {
        id: "3",
        name: "About",
        link: "/#about"
    },
    {
        id: "4",
        name: "Booking",
        link: "/#booking"
    },
]

const Navbar = ({theme, setTheme}) => {
    const [showMenu, setShowMenu] = useState(false);
    
    const togglemenu = () => {
        setShowMenu(!showMenu);
    }

    return(
        <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300 relative z-40">
            <div className="container py-3 md:py-0">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold font-serif">Rent-O-Car</h1>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-8">
                            {
                                NavLinks.map((link) => (
                                    <li key={link.id} className="py-4">
                                        <a href={link.link} className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium">{link.name}</a>
                                    </li>
                                ))
                            }
                            {/* Dark Mode Icons */}
                        <div className="hover:cursor-pointer">
                            {
                                theme === "dark" 
                                ? 
                                (
                                    <BiSolidSun className="text-2xl" onClick={() => setTheme("light")}/>
                                ) 
                                : 
                                (
                                    <BiSolidMoon className="text-2xl" onClick={() => setTheme("dark")}/>
                                )
                            }
                        </div>
                        </ul>
                    </div>
                    
                    <div className="flex items-center gap-4 md:hidden">
                        {/* Dark Mode Icons */}
                        <div className="hover:cursor-pointer">
                            {
                                theme === "dark" 
                                ? 
                                (
                                    <BiSolidSun className="text-2xl" onClick={() => setTheme("light")}/>
                                ) 
                                : 
                                (
                                    <BiSolidMoon className="text-2xl" onClick={() => setTheme("dark")}/>
                                )
                            }
                        </div>

                        {/* Mobile Hamburger Menu */}
                        {
                            showMenu ? (
                                <HiMenuAlt1 onClick={togglemenu} size={30} className="cursor-pointer transition-all" />
                            ): (
                                <HiMenuAlt3 onClick={togglemenu} size={30} className="cursor-pointer transition-all" />
                            )
                        }
                    </div>
                </div>
            </div>
            <ResponsiveMenu showMenu={showMenu}  />
        </nav>
    )
}

export default Navbar;