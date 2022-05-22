import React, { useState, useEffect } from "react";
import { ConnectWalletIcon, SearchIcon, DiscordIcon, TwitterIcon, BottomDownArrowIcon } from "./Icons";
import { Dropdown } from "react-bootstrap";
import MetaLeapLogo from "./MetaLeapLogo";
import SearchNavModal from "./SearchNavModal";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  setChain,
  setAccount,
  disconnectWallet,
  connectWalletIfPrevConnected,
  connectWallet,
} from "../../store/slices/web3Slice";

const Header = () => {
  const [show, setShow] = useState(false);
  const handldeOverlayActive = () => {
    document.body.classList.toggle("active-nav-overlay");
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [checkWallet, setCheckWallet] = useState(false);

  var account = useSelector((state) => state.web3Reducer.account);
  var provider = useSelector((state) => state.web3Reducer.provider);

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = async (accounts) => {
        console.log("accountsChanged", accounts);
        if (accounts.length == 0) {
          await dispatch(disconnectWallet());
        } else {
          dispatch(setAccount(accounts[0]));
        }
      };

      // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
      const handleChainChanged = (_hexChainId) => {
        // TODO: Best practice is to reload , need to figure out how to do that while still maintaining state.
        // window.location.reload();
        console.log("chain chainged", _hexChainId);
        dispatch(setChain(_hexChainId));
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      // Chain change also emits disconnect event. Handling disconnect via accountsChanged call.
      // provider.on("disconnect", handleDisconnect);

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          // provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [provider]);

  dispatch(connectWallet());

  useEffect(() => {
    if (!checkWallet) {
      dispatch(connectWalletIfPrevConnected());
      setCheckWallet(true);
    }
  });

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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
                  Axie NFT&lsquo;s
                  {/* </a> */}
                </Dropdown.Item>
                {/* </a> */}
                {/* </Link> */}

                <Dropdown.Item href="/manage-assets">Manage Assets</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <li className="small-para text-white mx-2 mx-xxl-3 cursor-pointer">How to lend NFTs?</li>
          <li className="small-para text-white mx-2 mx-xxl-3 cursor-pointer">How to rent NFTs?</li>
          <li className="small-para text-white mx-2 mx-xxl-3 cursor-pointer">Roadmap</li>
          <li className="small-para text-white mx-2 mx-xxl-3 cursor-pointer">About</li>
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
            {account == null || account == "" ? (
              <button
                type="button"
                className="ms-4 connect-wallet-icon cursor-pointer"
                onClick={() => dispatch(connectWallet())}
              >
                <ConnectWalletIcon />
              </button>
            ) : (
              <button type="button" className="connect-wallet-icon cursor-pointer">
                {account.slice(0,6) + "..."}
              </button>
            )}
          </div>
        </div>

        {/* HAMBURGER  ICON  */}
        <div
          id="nav-icon1"
          className="hamburger-menu d-xl-none"
          onClick={() => {
            handldeOverlayActive();
          }}
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
