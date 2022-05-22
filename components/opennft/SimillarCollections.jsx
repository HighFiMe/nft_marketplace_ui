import React from "react";
import { Accordion } from "react-bootstrap";
import {
  PropertiesDetails,
  SimilarCollection,
  StatusDetails,
} from "../common/helper";
import { AxieInfinityIcon, SelectRentIcon } from "../common/Icons";
import Image from "next/image";
import Properties from "./Properties";
import Status from "./Status";

const SimillarCollections = () => {
  return (
    <>
      <Accordion.Item eventKey="2" className="mt-4">
        <Accordion.Header>Similar Collections</Accordion.Header>
        <Accordion.Body className="px-1 px-sm-3">
          <div className="d-flex flex-column flex-sm-row justify-content-between">
            {SimilarCollection && SimilarCollection.length > 0 ? (
              SimilarCollection.map((item, index) => (
                <div
                  key={index}
                  className={`similar-section ${
                    index === 0 ? "me-sm-4 mb-4 mb-sm-0" : ""
                  }`}
                >
                  <img
                    className="axie w-100"
                    src={item.img}
                    alt="colection-item"
                  />
                  <div className=" d-flex justify-content-center align-items-center  flex-column">
                    <span className="mt-3">
                      <img src={item.img2} alt="" />
                    </span>
                    <p className="font-xl7 mt-3 color-white">{item.name}</p>
                    <p className="small-para color-grey-3">
                      <span className="para-2 color-grey-4 pe-2">
                        {item.itemNumber}
                      </span>
                      items
                    </p>
                    <p className="para-similar para-2 color-grey-2 text-center pb-3">
                      {item.para}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <h1>No Similar Collection found!</h1>
            )}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default SimillarCollections;
