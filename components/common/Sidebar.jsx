import React from "react";
import MetaLeapLogo from "./MetaLeapLogo";
import {
  ConnectWalletIcon,
  DiscordIcon,
  TwitterIcon,
  BottomDownArrowIcon,
} from "./Icons";
import { Dropdown } from "react-bootstrap";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <aside className="main-sidebar-wrapper d-flex flex-column justify-content-between">
        <div>
          <MetaLeapLogo />
          <ul className="list-unstyled d-flex flex-column w-100  justify-content-center my-5 p-0 nav-list-item-hover">
            <li className="collection-dropdown cursor-pointer">
              <Dropdown.Menu>
                <Link href="/">
                  <a className="text-decoration-none">
                    <Dropdown.Item>Nft&lsquo;s</Dropdown.Item>
                  </a>
                </Link>
                <Dropdown.Item>
                  <Link href="/manage-assets">
                    <a className="text-decoration-none">Another Collections</a>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </li>

            <li className="fs-xl fw-normal text-white mt-4 cursor-pointer">
              How to lend NFTs?
            </li>
            <li className="fs-xl fw-normal text-white mt-4 cursor-pointer">
              How to rent NFTs?
            </li>
            <li className="fs-xl fw-normal text-white mt-4 cursor-pointer">
              Roadmap
            </li>
            <li className="fs-xl fw-normal text-white mt-4 cursor-pointer">
              About
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center justify-content-center w-100">
          <span className="nav-social-icons">
            <DiscordIcon />
          </span>

          <span className="mx-3 nav-social-icons">
            <TwitterIcon />
          </span>
          <span className="connect-wallet-icon cursor-pointer">
            <ConnectWalletIcon />
          </span>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
