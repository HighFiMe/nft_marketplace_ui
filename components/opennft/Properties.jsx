import React from "react";
import { Accordion } from "react-bootstrap";
import { PropertiesDetails } from "../common/helper";

const Properties = () => {
  return (
    <>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="fs-xs fw-bold color-primary-green">
          Properties
        </Accordion.Header>
        <Accordion.Body>
          <div className="row ">
            {PropertiesDetails && PropertiesDetails.length > 0 ? (
              PropertiesDetails.map((item, index) => (
                <div className="col-sm-4 mt-4">
                  <div className="properties-accordion">
                    <div>
                      <p className="text-center mb-0">{item.move}</p>
                      <p className="text-center mb-0">{item.beastGore}</p>
                      <p className="text-center mb-0">{item.trait}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1>No Properties found!</h1>
            )}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default Properties;
