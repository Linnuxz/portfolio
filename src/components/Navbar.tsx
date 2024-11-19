import { Link } from "react-router-dom";
import { NavbarList } from "../constants";
import { useState } from "react";
import { MdLanguage } from "react-icons/md";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
    // Languages
    type Language = "english" | "georgian";
    const [language, setLanguage] = useState<Language>("english");
    const toggleLanguage = () =>
        setLanguage((prev) => (prev == "english" ? "georgian" : "english"));

    // Menu
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className="flex items-center justify-between p-4 px-10 md:justify-around">
            <h2 className="text-[20px]">
                <Link to="/">{NavbarList.name[language]}</Link>
            </h2>
            <ul className="hidden gap-[50px] md:flex">
                {NavbarList.navElements.map((navElement, index) => (
                    <li key={index} className="text-[18px]">
                        <Link
                            to={navElement.path}
                            className="transition-decoration duration-300 hover:underline"
                        >
                            {navElement.labels[language]}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="flex gap-5">
                <div className="relative md:hidden">
                    <button onClick={toggleMenu} className="p-2">
                        <LuMenu size={30} />
                    </button>
                    {isMenuOpen && (
                        <ul className="absolute right-0 top-16 rounded-lg p-4 shadow-lg md:hidden">
                            {NavbarList.navElements.map((navElement, index) => (
                                <li key={index} className="text-[18px]">
                                    <Link
                                        to={navElement.path}
                                        onClick={closeMenu}
                                    >
                                        {navElement.labels[language]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <button onClick={toggleLanguage} className="p-2">
                    <MdLanguage size={30} />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
