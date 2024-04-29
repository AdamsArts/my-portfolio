import React, { useState } from "react";
import './achivementsStyle.css';
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import certificate1 from '../Assets/Certificate1.jpg';
import certificate2 from '../Assets/Certificate2.jpg';
import certificate3 from '../Assets/Certificate3.jpg';
import certificate4 from '../Assets/Certificate4.jpg';
import certificate5 from '../Assets/Certificate5.jpg';




const Achivements = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    certificate1,
    certificate4,
    certificate3,
    certificate2,
    certificate5 // Sample image URL
    //Z", // Sample image URL
    // Add more image URLs as needed
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="Container" id="AchivementSection" data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true">
      <div className="TitleName" >
        <h1>My Achivements</h1>
      </div>

      <div className="carousel-container">
        <div className="carousel">
          <div className="left-image">
            <img
              src={images[(activeIndex - 1 + images.length) % images.length]}
              alt={`Image ${activeIndex}`}
            />
          </div>
          <div className="main-image">
            <img src={images[activeIndex]} alt={`Image ${activeIndex + 1}`} />
          </div>
          <div className="right-image">
            <img
              src={images[(activeIndex + 1) % images.length]}
              alt={`Image ${(activeIndex + 2) % images.length}`}
            />
          </div>
        </div>
        <button className="prev-button" onClick={prevSlide}>
          <FaArrowCircleLeft size={35} />




        </button>
        <button className="next-button" onClick={nextSlide}>

          <FaArrowCircleRight size={35} />
        </button>
      </div>
      <div className="AchivementDesclaimer">
        <h4> <b>Disclaimer</b> : The certificates provided are reference copies. Authentic originals are available upon request for verification purposes.</h4> </div>
    </div>
  );
};

export default Achivements
