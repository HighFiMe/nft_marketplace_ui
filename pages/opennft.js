import React from "react";
import NFTDetails from "../components/opennft/NFTDetails";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";

const OpenNft = () => {
  return (
    <>
      <div className="bg-home-hero">
        <Header />
        <Sidebar />
        <NFTDetails />
      </div>
    </>
  );
};

export default OpenNft;
