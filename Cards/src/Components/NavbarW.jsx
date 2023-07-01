import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {useState} from 'react'
import './NavbarW.css'


const NavbarW=()=>{

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='headercompoW'>
            <nav className='navbarW'>
                <a href='/' className='logoW'>
                    <h1>Conference</h1>
                </a>
                <div className='hamburgerW' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "navW-menu active" : "navW-menu"}>
                    <li className='navW-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='navW-item'>
                        <a href='/' onClick={closeMenu}>Speakers</a>
                    </li>
                    <li className='navW-item'>
                        <a href='/' onClick={closeMenu}>Committee</a>
                    </li>
                    <li className='navW-item'>
                        <a href='/' onClick={closeMenu}>Awards</a>
                    </li>
                    <li className='navW-item'>
                        <a href='/' onClick={closeMenu}>Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default NavbarW