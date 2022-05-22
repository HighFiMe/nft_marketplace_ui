import React from "react";
import { Accordion } from "react-bootstrap";
import Image from "next/image";
import { SimilarNft } from "../common/helper";

const SimilarNftAccordian = () => {
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="3">
          <Accordion.Header className="fs-xs fw-bold color-primary-green">
            Similar NFTs
          </Accordion.Header>
          <Accordion.Body>
            <div className="row">
              {SimilarNft && SimilarNft.length > 0 ? (
                SimilarNft.map((item, index) => (
                  <div
                    className="col-6 col-md-12 col-lg-6  d-flex justify-content-center  mt-3"
                    key={index}
                  >
                    <div className="similar-nft-card">
                      <div className="d-flex justify-content-center">
                        <Image
                          className="axie"
                          width={169}
                          height={169}
                          src={item.img2}
                          alt="colection-item"
                        />
                      </div>
                      <div className="d-flex justify-content-center flex-column align-items-center ">
                        <p className="small-para-2 color-primary-grey">
                          {item.name}
                        </p>
                        <p className="para color-primary-grey">{item.number}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1>No Similar Collection found!</h1>
              )}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default SimilarNftAccordian;
