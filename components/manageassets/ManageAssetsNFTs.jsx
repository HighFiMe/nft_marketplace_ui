import React from "react";
import { nftCollectionsData } from "../common/helper";
import NftCardItem from "./NftCardItem";

const ManageAssetsNFTs = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="row">
          {nftCollectionsData &&
            nftCollectionsData.map((nfts, index) => (
              <NftCardItem key={index} nfts={nfts} id={index} />
            ))}
        </div>
      </div>
    </>
  );
};

export default ManageAssetsNFTs;
