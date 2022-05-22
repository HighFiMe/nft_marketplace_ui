import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  AxieInfinityIcon,
  NextIcon,
  SelectRentIcon,
  WalletIcon,
} from "../common/Icons";
import According from "./According";
import SimilarNftAccordian from "./SimilarNftAccordian";
import { useRouter } from "next/router";
import { openCollectionsData } from "../common/helper";
const NFTDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [nftDetails, setNftDetails] = useState({});
  useEffect(() => {
    // FILTER ARRAY BY OBJECT ID
    const filterObject = openCollectionsData.filter(
      (obj) => obj.hash === Number(id)
    );
    // AND SET SIGNLE OBJECT TO STATE
    console.log(filterObject);
    if (filterObject.length) {
      setNftDetails(filterObject[0]);
    }
  }, [id]);

  console.log(nftDetails);
  return (
    <div className="container-fluid">
      <div className="row justify-content-between">
        <div className="col-md-4 ">
          <div className="d-flex  justify-content-center align-items-center flex-column">
            <div className="">
              <div className="card-collection">
                {nftDetails && nftDetails.imgPath && (
                  <Image
                    width={347}
                    height={440}
                    src={nftDetails && nftDetails.imgPath}
                    alt="colection-item"
                  />
                )}
              </div>
              <div className="d-flex justify-content-center mt-3">
                <a
                  href="#"
                  className="small-para-2 view-collection-hover text-decoration-none color-green"
                >
                  View All Collection
                  <span className="ps-3 ">
                    <NextIcon />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <SimilarNftAccordian />
          </div>
        </div>
        <div className="col-md-8 mt-md-0 mt-4">
          <div className="border-hero"></div>
          <p className="fs-xs fw-bold color-primary-green pt-3">Description</p>
          <p className="fs-xl7 fw-bold  color-white ff-messapiaBold">
            Good tank ! #{id}
          </p>
          <div className="d-flex flex-column flex-sm-row align-items-start aling-items-sm-center mb-3">
            <div className="d-flex mb-2 mb-sm-0">
              <span className="small-para-2 color-grey-2 pe-2 pe-sm-5">
                <span className="pe-3">
                  <AxieInfinityIcon />
                </span>
                Axie Infinity
              </span>
              <span className="color-grey-4 para-2 pe-5"> #{id} </span>
            </div>
            <div className="d-flex">
              <span className="color-grey-3 small-para">Lender</span>
              <span className="color-grey-4 para-2 ms-2">0x952...663</span>
            </div>
          </div>
          <p className=" para-2 color-white description-para">
            A collection 8888 Cute Chubby Pudgy Penquins sliding around on the
            freezing ETH blockchain.A collection 8888 Cute Chubby Pudgy Penquins
            sliding around on the freezing ETH blockchain.
          </p>
          <p className="small-para color-grey mt-5">
            Select rent duration{" "}
            <span className="ps-1">
              <SelectRentIcon />
            </span>
          </p>
          <div className="chose-rent">
            <input
              className="outline-0"
              type="text"
              placeholder="Enter or choose duration for rent..."
            />
          </div>
          <div className="mt-5 d-flex ">
            <div className="days-section d-flex justify-content-center align-items-center">
              <p className="mb-0"> 1 Day</p>
            </div>
            <div className="days-section d-flex justify-content-center align-items-center">
              <p className="mb-0"> 3 Days</p>
            </div>
            <div className="days-section d-flex justify-content-center align-items-center">
              <p className="mb-0"> 7 Days</p>
            </div>
            <div className="days-section d-flex justify-content-center align-items-center">
              <p className="mb-0"> 30 Days</p>
            </div>
          </div>
          <div className="d-flex mt-4 justify-content-between mx-w-529">
            <p className="small-para color-grey">
              Daily price
              <span className="ps-2">
                <SelectRentIcon />
              </span>
            </p>
            <p className="para-2 color-white">0.01 WETH</p>
          </div>
          <div className="d-flex mt-4 justify-content-between mx-w-529">
            <p className="small-para color-grey">
              Days
              <span className="ps-2">
                <SelectRentIcon />
              </span>
            </p>
            <p className="para-2 color-white">0 days</p>
          </div>
          <div className="grey-border-2 mx-w-529"></div>
          <div className="d-flex mt-2 justify-content-between mx-w-529">
            <p className="small-para color-grey">
              Total amount
              <span className="ps-2">
                <SelectRentIcon />
              </span>
            </p>
            <p className="para-2 color-white">0 WETH</p>
          </div>
          <div>
            <label className="input-check">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <p className="small-para color-grey-2 ps-5">
              I understand I cannot undo the rental once I approve.
            </p>
          </div>
          <div>
            <label className="input-check">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <p className="small-para color-grey-2 ps-5">
              Our smart contracts are not audited yet so I agree to use this
              service at my own risk.
            </p>
          </div>
          <button className="btn-rent mt-4">
            Rent now{" "}
            <span className="ps-2">
              <WalletIcon />
            </span>
          </button>
          <div>
            <According />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetails;
