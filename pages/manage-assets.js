import React from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import ManageAssetsHero from "../components/manageassets/ManageAssetsHero";
import ManageAssetsNFTs from "../components/manageassets/ManageAssetsNFTs";

const ManageAssets = () => {
  return (
    <>
      <div className="bg-manage-assets">
        <Header />
        <Sidebar />
        <ManageAssetsHero />
        <ManageAssetsNFTs />
      </div>
    </>
  );
};

export default ManageAssets;
