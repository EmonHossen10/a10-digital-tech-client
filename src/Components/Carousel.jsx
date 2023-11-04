/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Carousel.css";

const Carousel = ({ specificData }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === specificData.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? specificData.length - 1 : slide - 1);
  };

  return (
    <div className="carousel   lg:h-[600px] ">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {specificData.map((item, idx) => {
        return (
          <img
            src={item.Image}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {specificData.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
