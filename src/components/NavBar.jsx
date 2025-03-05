import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar() {
    const [activePage, setActivePage] = useState('about')

    return (
        <>
            <nav className='h-12 w-6/12 mx-auto flex items-center justify-center'>

                <ul className='flex gap-8'>

                    <li>
                        <button className='px-4 py-2 rounded transition-all duration-300 hover:bg-[#5ebad3] hover:text-white'
                        onClick={() => setActivePage("about")}>Sobre mim</button>
                    </li>

                    <li>
                        <button className='px-4 py-2 rounded transition-all duration-300 hover:bg-[#5ebad3] hover:text-white'
                        onClick={() => setActivePage("projects")}>Projetos</button>
                    </li>

                    <li>
                        <button onClick={() => window.open('/exemplo.pdf', '_blank')}
                        className="px-4 py-2 rounded transition-all duration-300 hover:bg-[#5ebad3] hover:text-white">
                            Currículo
                        </button>
                    </li>

                    <li>
                        <button className='px-4 py-2 rounded transition-all duration-300 hover:bg-[#5ebad3] hover:text-white'
                        onClick={() => setActivePage("contact")}>Contato</button>
                    </li>

                </ul>

            </nav>
        </>
    )
}

export default NavBar;