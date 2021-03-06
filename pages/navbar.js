import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setChain,
  setAccount,
  disconnectWallet,
  connectWalletIfPrevConnected,
} from "../store/slices/web3Slice";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {" "}
        {/*logo container*/}
        <a className="text-xl font-semibold" href="/">
          LOGO
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-medium my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </a>
      </div>
    </div>
  );
}

const Navbar = (props) => {
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

  useEffect(() => {
    if (!checkWallet) {
      dispatch(connectWalletIfPrevConnected());
      setCheckWallet(true);
    }
  });

  function connectWallet() {
    console.log("wallet is connect");
  }

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
        <MobileNav open={open} setOpen={setOpen} />
        <div className="w-3/12 flex items-center">
          <a className="text-2xl font-semibold" href="/">
            LOGO
          </a>
        </div>
        <div className="w-9/12 flex justify-end items-center">
          <div
            className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            hamburger button
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-3.5" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
                open ? "w-0" : "w-full"
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-3.5" : ""
              }`}
            />
          </div>

          <div className="hidden md:flex">
            <NavLink to="/contact">CONTACT</NavLink>
            <NavLink to="/about">ABOUT</NavLink>

            {account == null || account == "" ? (
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => dispatch(connectWallet())}
              >
                Connect Wallet
              </button>
            ) : (
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                {account}
              </button>
            )}
          </div>
        </div>
      </nav>

      <h1>Hello ETH India Hackers!</h1>
      <h2>A basic example of using web3modal with Portis</h2>

      <div className="showPortisBtn">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => connectWallet()}
        >
          Connect Wallet
        </button>
      </div>
      <pre id="userWalletAddress"></pre>
      <h3>
        Make sure you switch out the `id` parameter in the Portis provider
        options for the one you created for your DApp in the{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://dashboard.portis.io"
        >
          Portis Dashboard
        </a>
      </h3>
    </>
  );
};

export default Navbar;
