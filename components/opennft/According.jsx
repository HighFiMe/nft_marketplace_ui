import React from "react";
import { Accordion } from "react-bootstrap";
import { SimilarCollection, StatusDetails } from "../common/helper";
import { SelectRentIcon } from "../common/Icons";
import Properties from "./Properties";
import Status from "./Status";
import SimillarCollections from "./SimillarCollections";

const According = () => {
  return (
    <div className="mt-5">
      <Accordion>
        <Properties />
        <Status />
        <SimillarCollections />
      </Accordion>
    </div>
  );
};

export default According;
