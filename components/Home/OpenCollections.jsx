import React from "react";
import { openCollectionsData } from "../common/helper";
import CollectionCard from "./CollectionCard";

const OpenCollections = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          {openCollectionsData && openCollectionsData.length > 0 ? (
            openCollectionsData.map((item, index) => (
              <CollectionCard key={index} item={item} />
            ))
          ) : (
            <h1>No Collections found!</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default OpenCollections;
