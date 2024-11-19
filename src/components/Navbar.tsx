import { Link } from 'react-router-dom';
import { DataList } from '../constants';
import { useState } from 'react';
import { MdLanguage } from 'react-icons/md';
import { LuMenu } from 'react-icons/lu';
import { Language } from '../constants';

const Navbar = ({
    language,
    setLanguage,
}: {
    language: Language;
    setLanguage: (language: Language | ((prev: Language) => Language)) => void;
}) => {
    const toggleLanguage = () =>
        setLanguage((prev: Language) =>
            prev == 'english' ? 'georgian' : 'english',
        );

    // Menu
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className="flex items-center justify-between p-4 px-10 md:justify-around mb-[40px]">
            <h2 className="text-[23px] font-bold">
                <Link to="/">{DataList.name[language]}</Link>
            </h2>
            <ul className="hidden gap-[50px] md:flex">
                {DataList.navElements.map((navElement, index) => (
                    <li key={index} className="text-[16px] font-normal">
                        <Link to={navElement.path} className="hover:underline">
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
                            {DataList.navElements.map((navElement, index) => (
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
