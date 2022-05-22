import React, { useState } from "react";
import {
  ConnectWalletIcon,
  SearchIcon,
  DiscordIcon,
  TwitterIcon,
  BottomDownArrowIcon,
} from "./Icons";
import { Dropdown } from "react-bootstrap";
import MetaLeapLogo from "./MetaLeapLogo";
import SearchNavModal from "./SearchNavModal";
import Link from "next/link";

const Header = () => {
  const [show, setShow] = useState(false);
  const handldeOverlayActive = () => {
    document.body.classList.toggle("active-nav-overlay");
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="max-w-1440 mx-auto container-fluid py-4 d-flex align-items-center justify-content-between">
        {/* NAV LOGO  */}
        <Link href="/">
          <a className="text-decoration-none">
            <MetaLeapLogo />
          </a>
        </Link>

        {/* NAV LIST ITEMS  */}

        <ul className="list-unstyled d-none d-xl-flex w-100 align-items-center justify-content-center m-0 p-0 nav-list-item-hover">
          <li className="mx-2 mx-xxl-3 collection-dropdown cursor-pointer">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <span className="small-para text-white">
                  Collections <BottomDownArrowIcon />
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {/* <Link href="/"> */}

                <Dropdown.Item href="/">
                  {/* <a href="/" className="text-decoration-none"> */}
                  Nft&lsquo;s
                  {/* </a> */}
                </Dropdown.Item>
                {/* </a> */}
                {/* </Link> */}

                <Dropdown.Item href="/manage-assets">
                  Another Collections
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <li className="small-para text-white mx-2 mx-xxl-3 cursor-pointer">
            How to lend NFTs?
          </li>
          <li className="small-para text-white mx-2 mx-xxl-3 cursor-pointer">
            How to rent NFTs?
          </li>
          <li className="small-para text-white mx-2 mx-xxl-3 cursor-pointer">
            Roadmap
          </li>
          <li className="small-para text-white mx-2 mx-xxl-3 cursor-pointer">
            About
          </li>
        </ul>

        <span className="cursor-pointer d-lg-none" onClick={handleShow}>
          <SearchIcon />
        </span>
        {/* NAVBAR SEARCH INPUT  */}
        <div className="d-none d-lg-flex align-items-center">
          <div className="search-wrapper-navbar">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>

          {/* SOCIAL ICONS  */}
          <div className="d-flex align-items-center">
            <span className="ms-4  nav-social-icons">
              <DiscordIcon />
            </span>

            <span className="mx-2 nav-social-icons">
              <TwitterIcon />
            </span>
            <span className="ms-4 connect-wallet-icon cursor-pointer">
              <ConnectWalletIcon />
            </span>
          </div>
        </div>

        {/* HAMBURGER  ICON  */}
        <div
          id="nav-icon1"
          className="hamburger-menu d-xl-none"
          onClick={() => handldeOverlayActive()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <SearchNavModal show={show} handleClose={handleClose} />
    </>
  );
};

export default Header;
