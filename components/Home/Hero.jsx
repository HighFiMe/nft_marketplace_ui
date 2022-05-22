import React from "react";
import { StarIcon } from "../common/Icons";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import HeroSlider from "./HeroSlider";
const Hero = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-column flex-lg-row justify-content-between">
        <div className="col-12 col-lg-6 col-xl-5 hero-carousel-wrapper">
          <HeroSlider />
        </div>
        <div className="col-12 col-lg-6 col-xl-7">
          <div className="border-hero"></div>
          <div>
            <p className="fs-xs fw-bold color-primary-green pt-3">
              Collection Details
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-between">
              <div>
                <h1 className="main-header color-white ff-messapiaBold">
                  Axie Infinity
                </h1>
                <div className="d-flex justify-content-between">
                  <p>
                    <span className="color-grey-4 fs-md text-normal me-2">
                      24
                    </span>
                    <span className="color-grey-3 fs-sm text-normal">
                      items
                    </span>
                  </p>
                  <p className="mx-3">
                    <span className="color-grey-4 fs-md text-normal me-2">
                      14
                    </span>
                    <span className="color-grey-3 fs-sm text-normal">
                      owners
                    </span>
                  </p>
                  <p>
                    <span className="color-grey-4 fs-md text-normal me-2">
                      0.003 Ξ ($5.88)
                    </span>
                    <span className="color-grey-3 fs-sm text-normal">
                      Lowest price
                    </span>
                  </p>
                </div>
              </div>
              <div className="mb-3 mb-sm-0">
                <button className="common-outline-button d-flex align-items-center">
                  <span className="me-2">
                    <StarIcon />
                  </span>
                  Add to watchlist
                </button>
              </div>
            </div>
            <p className="small-para mx-w-hero-para color-grey-2">
              The Axie marketplace has been moved to Ronin, an Ethereum
              sidechain. Axies are fierce creatures that love to battle, build,
              and hunt for treasure! Build up a collection and use them across
              an ever expanding universe of games!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
