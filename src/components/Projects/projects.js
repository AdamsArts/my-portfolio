import React from 'react'
import './projectsStyle.css';
import project1 from "../Assets/onlineLawSystem.jpg"
import project2 from "../Assets/certificateProject.jpg"
import project3 from "../Assets/E-commerceProject.jpg.png"
import project4 from "../Assets/WebSiteProject.jpeg"
import project5 from "../Assets/PortfolioProject.jpg"

const projects = () => {
  return (
    <div>
      <div className='projectContainer' id='ProjectSection' data-aos="zoom-in-down" data-aos-duration="1000" data-aos-mirror="true" >

        <div className='ProjectTitleContainer'>
          <h2>Projects Gallery</h2>
        </div>

        <div className='projectCardsContainer'>

          <article class="card">
            <div class="card__inner">
              <div class="card__body card__body--front">
                <img class="lable1" src={project1}  height="380px" alt="image" />

              </div>
              <div class="card__body card__body--back">
                <h2 class="card__title">The Online Law System</h2>
                <p className='ProjectDesc'>
                  <b>Technologies</b> <br></br>
                  ASP.Net <br/>
                  MS-Sql
                </p>
              </div>
            </div>
          </article>
          <article class="card">
            <div class="card__inner">
              <div class="card__body card__body--front">
                <img class="lable1" src={project2} height="380px" alt="image" />

              </div>
              <div class="card__body card__body--back">
                <h2 class="card__title">Certificate Designing</h2>
                <p className='ProjectDesc'>
                  <b>Technologies</b> <br></br>
                  PhotoShop <br/>
                 
                </p>
              </div>
            </div>
          </article>
          <article class="card">
            <div class="card__inner">
              <div class="card__body card__body--front">
                <img class="lable1" src={project3} height="100%" width="100%" alt="image" />

              </div>
              <div class="card__body card__body--back">
                <h2 class="card__title">E-Commerce Application</h2>
              <p className='ProjectDesc'>
                  <b>Technologies</b> <br></br>
                  SpringBoot <br/>
                  MySql Server <br/>
                  Html, CSS, JavaScript
                </p>
              </div>
            </div>
          </article>
          <article class="card">
            <div class="card__inner">
              <div class="card__body card__body--front">
                <img class="lable1" src={project4} height="100%" width="100%" alt="image" />

              </div>
              <div class="card__body card__body--back">
                <h2 class="card__title">Website Designing</h2>
                 <p className='ProjectDesc'>
                  <b>Technologies</b> <br></br>
                  ReactJS <br/>
                  Bootstrap
                </p>
              </div>
            </div>
          </article>
          <article class="card">
            <div class="card__inner">
              <div class="card__body card__body--front">
                <img class="lable1" src={project5} height="100%" width="100%" alt="image" />

              </div>
              <div class="card__body card__body--back">
                <h2 class="card__title">Personal Portfolio</h2>
                <p className='ProjectDesc'>
                  <b>Technologies</b> <br></br>
                  ReactJS <br/>
                  
                </p>
              </div>
            </div>
          </article>
          

        </div>



      </div>

    </div>
  )
}

export default projects
