import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import ParadiseInn from "../../img/p1.jpg";
import SnackShack from "../../img/p2.jpg";
import IntrovertTravels from "../../img/p3.jpg";
import Motocross from "../../img/p4.jpg";
import Port from "../../img/p5.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://fascinating-raindrop-88b2c6.netlify.app/" target="_blank"><img src={ParadiseInn} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://snack-shack.42web.io/?i=1" target="_blank"><img src={SnackShack} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://darshan-star.github.io/Introvert-travels/index.html" target="_blank"><img src={IntrovertTravels} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://darshan-star.github.io/motocross-game/" target="_blank"><img src={Motocross} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://darshan-star.github.io/portfolio/" target="_blank"><img src={Port} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
