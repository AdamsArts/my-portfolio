import React from 'react'
import './aboutStyle.css';
import { CiTextAlignCenter } from 'react-icons/ci';

const about = () => {
  return (
    <div>

      <div className='AboutContainer' id='AboutSection' data-aos="zoom-in-up" data-aos-duration="1000" data-aos-mirror="true">
        <div className='AboutHeading'  >
          <h1>Professional Journey</h1>

        </div>

        <div className='AboutSlideContainer'>
          <header class="hero">

            <ul className="slider">
              <li className="slide s1"></li>
              <li className="slide s2"></li>
              <li className="slide s3"></li>
              <li className="slide s4"></li>
              <li className="slide s5"></li>

            </ul>

          </header>


        </div>

      </div>

    </div>
  )
}

export default about
