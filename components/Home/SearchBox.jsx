import React from "react";
import { SearchIcon, ThreeLineStepsIcon } from "../common/Icons";
import Select from "react-select";

const SearchBox = () => {
  const options = [
    { value: "most-viewed", label: "Most Viewed" },
    { value: "recently-viewed", label: "Recently Viewed" },
    { value: "lats-viewed", label: "Last Viewed" },
  ];

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col d-flex flex-column flex-sm-row justify-content-between">
          <div className="most-view-select-wrapper">
            <Select options={options} />
          </div>
          <div className="d-flex align-items-center w-100 mt-3 mt-sm-0">
            <div className="search-box w-100 me-2 mx-sm-3">
              <span className="pe-3">
                <SearchIcon />
              </span>
              <input
                type="text"
                className="w-100 me-4 ps-"
                placeholder="Search"
              />
            </div>

            <button className="common-outline-button d-flex align-items-center">
              <span className="pe-2">
                <ThreeLineStepsIcon />
              </span>
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
