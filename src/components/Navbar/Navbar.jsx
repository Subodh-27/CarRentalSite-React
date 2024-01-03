const NavLinks = [
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

const Navbar = () => {
    return(
        <nav className="shadow-md">
            <div className="container">
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
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;