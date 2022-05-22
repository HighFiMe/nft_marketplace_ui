import React from "react";
import { Modal, Button } from "react-bootstrap";
import { SearchIcon } from "./Icons";

const SearchNavModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal
        className="search-nav-modal"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Search Collections...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="search-wrapper-navbar-in-modal">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="common-filltd-green-button px-4"
            onClick={handleClose}
          >
            Close
          </button>
          <button
            className="common-filltd-grey-button px-5"
            onClick={handleClose}
          >
            Search
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SearchNavModal;
