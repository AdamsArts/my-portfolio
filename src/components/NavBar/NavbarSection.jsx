
import React, { useState } from 'react';
import './navbarStyle.css';

import { HiHome } from "react-icons/hi2";
import { BsList } from "react-icons/bs";
import { BiX } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { IoHardwareChip } from "react-icons/io5";
import { HiMiniTrophy } from "react-icons/hi2";
import { IoMdContacts } from "react-icons/io";



const NavbarSection = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [areMenuIconsVisible, setAreMenuIconsVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setAreMenuIconsVisible(true); // Show menu icons when opening the menu

    }

  };

  const closeMenu = () => {

    setIsMenuOpen(false);


  };



  return (
    <div>

      <div className='NavbarContainer' data-aos="fade-up"   data-aos-duration="1000"
       >

        <div className='NavNameContainer'>
          <h2 className='name'>Adambasha</h2>
        </div>

        <div className='NavMenuContainer'>

          <ul className='MenuItemsContainer'>
            <li className='MenuItems'> <a className='NavLinks' href='#' >Profile</a></li>
            <li className='MenuItems'> <a className='NavLinks' href='#AboutSection' >About Me</a></li>
            <li className='MenuItems'> <a className='NavLinks' href='#ProjectSection' >Projects</a></li>
            <li className='MenuItems'> <a className='NavLinks' href='#AchivementSection' >Achivements</a></li>
            <li className='MenuItems'> <a className='NavLinks' href='#FooterSection' >Contact</a></li>
          </ul>

        </div>




      </div>

      <div className="NavBarCircular">
        <div className="menuIcon">
          {isMenuOpen ? (
            <BiX className='Icons CloseIcon' onClick={toggleMenu} />
          ) : (
            <BsList className='Icons OpenICon' onClick={toggleMenu} />
          )}
        </div>

        {isMenuOpen && areMenuIconsVisible && (
          <div className="MenuIcons">
            <a href='#ProfileSection' onClick={closeMenu} ><HiHome className='Icons' /></a>
            <a href='#AboutSection' onClick={closeMenu} ><FaUser className='Icons' /></a>
            <a href='#ProjectSection' onClick={closeMenu}><IoHardwareChip className='Icons' /></a>
            <a href='#AchivementSection' onClick={closeMenu}><HiMiniTrophy className='Icons' /></a>
            <a href='#FooterSection' onClick={closeMenu}><IoMdContacts className='Icons' /></a>
          </div>
        )}

      </div>



    </div>
  )
}

export default NavbarSection
