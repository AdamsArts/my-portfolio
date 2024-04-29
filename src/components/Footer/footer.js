import React from 'react'
import './footerStyle.css';
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";




const footer = () => {
  return (
    <div>

      <div className='FooterContainer' id='FooterSection' data-aos="fade-up"
     data-aos-anchor-placement="top-center">

        <div className='FooterContents'>

          <div className='FooterLinkContainer'>

            <h3>Quick Links</h3>

            <ul>
              <li className='FooterLinks'><a href='#ProfileSection' className='FooterLinks'>Home</a></li>
              <li className='FooterLinks'><a href='#AboutSection' className='FooterLinks'>About</a></li>
              <li className='FooterLinks'><a href='#ProjectSection' className='FooterLinks'>Projects</a></li>
              <li className='FooterLinks'><a href='#AchivementSection' className='FooterLinks'>Skills</a></li>
              {/* <li className='FooterLinks'><a href='#' className='FooterLinks'>Contact</a></li> */}
            </ul>

          </div>

          <div className='FooterContactContainer'>

            <h2>To Reach Me</h2>
            <div className=''>
            <div className='ContactDet'>
              <FaWhatsapp size={30} className='FooterIcons' /> <span><a href='https://wa.me/8637429214/?text=Hello%20Adam' target='_blank' className='ContactLinks'>+91 8637429214</a></span>
            </div>

            <div className='ContactDet'>
              <IoIosMail size={30} className='FooterIcons' /> <span><a href='mailto:your.email@example.com' target='_blank' className='ContactLinks'>adambhai001@gmail.com</a></span>
            </div>
            <div className='ContactDet'>
              <FaLocationDot size={30} className='FooterIcons' /> <span><a href='https://maps.app.goo.gl/pu5Wowrgs4jsTYZv6' target='_blank' className='ContactLinks'>Sholinghur, Tamilnadu.</a></span>
            </div>
            </div>
              {/* <div className='ContactDet'>
              <FaGithub size={30} className='FooterIcons' /> <span>Adambasha</span>
              </div> */}

          </div>

          <div className='FooterConnectContainer'>

            <div className='SocialHeading'>
              <h2>Get in Touch</h2>

            </div>
            <div className='SocialIconsContainer'>

              <div className='SocialIcons'>
              <a href='https://www.linkedin.com/in/imadambhai' target='_blank' className='SocialIcons'><FaLinkedin size={30}/></a>
              </div>

              <div className='SocialIcons'>
              <a href='https://www.instagram.com/mr.adam_bhai' target='_blank' className='SocialIcons'><FaInstagram size={30}/></a>
              </div>

              <div className='SocialIcons'>
              <a href='https://twitter.com/_Adam_bhai' target='_blank' className='SocialIcons'><BsTwitterX size={30}/></a>
              </div>

              <div className='SocialIcons'>
              <a href='https://github.com/AdamsArts' target='_blank' className='SocialIcons'><FaGithub size={30}/></a>
              </div>
              

            </div>

          </div>



        </div>




        <div className='FooterCopywrite'>

          <hr className='hrLine'></hr>

          <div className='copyRightContent'>
          <FaRegCopyright size={20} />
          <span>All rights reserved</span>
          </div>


        </div>

      </div>

    </div>
  )
}

export default footer
