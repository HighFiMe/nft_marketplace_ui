import Image from "next/image";
import React from "react";

const NftCardItem = ({ nfts, id }) => {
  const { imgPath, hash, title, description, walletAddress, timeLeft } = nfts;

  console.log(id);

  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-4">
        <div className="nft-card-item">
          <div
            className={`nft-card-item-head ${
              id === 0 ? "bg-dark-orange text-white" : ""
            } ${id === 1 ? "bg-primary-orange color-organ" : ""} ${
              id === 2 ? "bg-light-green color-dark-green" : ""
            }`}
          >
            <h4 className="small-para-2  mb-0">{timeLeft}</h4>
          </div>
          <div>
            <div className="d-flex justify-content-center">
              <Image src={imgPath} alt="nft-item" width={220} height={240} />
            </div>
            {/* <img src={imgPath} alt="nft-item" /> */}
            <div>
              <h6 className="small-para-2 color-primary-grey text-center">
                {title}
              </h6>
              <h5 className="para color-primary-grey text-center">#{hash}</h5>
              <h3 className="para color-primary-grey text-center">
                {description}
              </h3>
              <p className="para-2 color-grey-2 text-center">{walletAddress}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftCardItem;
