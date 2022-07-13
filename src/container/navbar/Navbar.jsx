import React, { useState } from "react";
import { Link } from 'react-router-dom'
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/nedeevahIcon.png';



//import { motion } from "framer-motion";

const Menu = () => (
    <>
          <ul >
          <li> <Link to='/'>Home</Link> </li>
            <li> <Link to='/about'>About</Link> </li>
            <li> <Link to='/causes'>Causes</Link> </li>
            <li> <Link to='/contact'>Contact</Link> </li>
            <li> <Link to='/donate'>Donate</Link> </li>
        </ul>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);


    return(
        <div className="navbar__container" id='Home'> 
        

        <Link to='/'>
                <div className="navbar__container-logo">
                <img src={logo} alt="logo" />
                </div>
       </Link>
                <div className="navbar__container-list">
                <Menu  />
                </div>
      

        <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-list">
           <Menu />
          </div>
                     
              </div>
            )
            }
          </div>

  

         </div>
    )
}
export default Navbar