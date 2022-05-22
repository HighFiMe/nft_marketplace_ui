import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const HeroSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        <SliderItem />
        <SliderItem />
        <SliderItem />
      </Slider>
    </>
  );
};

export default HeroSlider;

export const SliderItem = () => {
  return (
    <div className="d-flex justify-content-center align-items-center hero-slider-item position-relative">
      <Image
        className="rounded-md"
        width={500}
        height={390}
        src="/images/hero-img.png"
        alt="colection-item"
      />

      <div className="hero-img-card">
        <Image
          width={120}
          height={60}
          src="/images/axie-img.png"
          alt="colection-item"
        />
      </div>
    </div>
  );
};
