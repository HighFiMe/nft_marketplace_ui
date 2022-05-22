import React from "react";
import { Accordion } from "react-bootstrap";
import { StatusDetails } from "../common/helper";
import { SelectRentIcon } from "../common/Icons";

const Status = () => {
  return (
    <>
      <Accordion.Item eventKey="1" className="mt-4">
        <Accordion.Header>Status</Accordion.Header>
        <Accordion.Body className="px-1 px-sm-3">
          {StatusDetails && StatusDetails.length > 0 ? (
            StatusDetails.map((item, index) => (
              <div className="d-flex mt-4 justify-content-between" key={index}>
                <p className="small-para color-grey">
                  {item.name}
                  <span className="ps-2">
                    <SelectRentIcon />
                  </span>
                </p>
                <p className="para-2 color-grey-2">
                  <img className="pe-2" src={item.imgPath} alt="" />
                  {item.number}
                </p>
              </div>
            ))
          ) : (
            <h1>No Status found!</h1>
          )}
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default Status;
