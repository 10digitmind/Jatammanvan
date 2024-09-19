import React, { useState } from 'react';
import logo from '../Images/64a736b326ed51cb1c8ea0dd_logo.png';
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {

    const [mobilenav, setMobilenav] = useState(false);

    function toggle() {
        setMobilenav(prev => !prev);
    }
    return (
        <div>
            <div>

                <header id=Header className="flex justify-center w-full sticky top-0 z-50">
                    <div className="h-24 w-11/12 rounded-xl shadow-2xl mt-4 bg-white flex items-center justify-between">
                        <div className='ml-8'>
                            <img className="w-16" src={logo} alt="Logo" />
                        </div>

                        {/* Hide the navigation bar below 690px */}
                        <nav className="hidden md:flex">
                            <ul className="flex items-center w-96 h-16 justify-evenly mr-4">
                                <li>
                                    <a className="text-sm" href="#Header">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a className="text-sm" href="#Aboutus">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a className="text-sm" href="#Ourservices">
                                        Service
                                    </a>
                                </li>
                                <li>
                                    <a className="text-sm" href="#book-us">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        {/* Show the burger icon below 690px */}
                        <div className="block md:hidden mr-4">
                            <GiHamburgerMenu onClick={toggle} />
                        </div>
                    </div>
                </header>
            </div>
            {mobilenav ? (
                <div className='w-full h-auto flex justify-center md:hidden '>
                    <div className='w-11/12 h-auto flex items-center justify-center rounded-xl shadow-2xl bg-white'>
                        <ul className="flex-row w-96 h-auto">
                            <li className='flex items-center justify-center h-16'>
                                <a className="text-sm" href="#Header">
                                    Home
                                </a>
                            </li>
                            <li className='flex items-center justify-center h-16'>
                                <a className="text-sm" href="#Aboutus">
                                    About
                                </a>
                            </li>
                            <li className='flex items-center justify-center h-16'>
                                <a className="text-sm" href="#Ourservices">
                                    Service
                                </a>
                            </li>
                            <li className='flex items-center justify-center h-16'>
                                <a className="text-sm" href="#book-us">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            ) : ''}
        </div>
    );
}

export default Header;
