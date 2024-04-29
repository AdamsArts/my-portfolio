import React from 'react'
import './profileStyle.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import MyPdf from "../Assets/Adambasha N.pdf"
import MyProfile from "../Assets/164465--.jpg";

const profile = () => {
  return (
    <div>

      <div className='ProfileContainer' id='ProfileSection'  >
      

        <div className='ProfilePicContainer' data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true">

          <img className='profilePic' src={MyProfile} ></img>

       

        </div>

        <div className='ProfileContentContainer' data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="true">
          <h2 className='ProfilePoints'>Hello I'm</h2>
          <h1 className='ProfilePoints'>Adambasha</h1>
          <h2 className='ProfilePoints'>Full stack developer</h2>

          <div className='ProfileButtonContainer'>

            <div className='ProfileButton'>

              <a href={MyPdf} target='_blank'>
                <button  className='ProfileBtn ProfileBtnPrimary'>View CV</button>
              </a>

            </div>
            <div className='ProfileButton'>
            <a href='#FooterSection'>
                <button className='ProfileBtn'>Hire Me</button>
              </a>

            </div>

          </div>

          <div className='ProfileCirButtonContainer'>

            <a href='https://github.com/AdamsArts' target='_blank'><div className='ProfileCirBtn'>
            <FaGithub className='ProfileCirBtnIcon' />
              </div>
              </a>
            <a href='https://www.linkedin.com/in/imadambhai' target='_blank'><div className='ProfileCirBtn'>
            <FaLinkedin className='ProfileCirBtnIcon' />
              </div>
              </a>

          </div>



        </div>

      </div>

      
    </div>
  )
}

export default profile
