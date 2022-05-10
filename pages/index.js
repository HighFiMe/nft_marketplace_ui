import WalletConnectProvider from '@walletconnect/web3-provider'
import WalletLink from 'walletlink'
import Web3 from "web3";
import Web3Modal from "web3modal";
import Portis from "@portis/web3";
import Authereum from "Authereum";
import { useCallback, useEffect, useReducer, useState } from "react";
import Navbar from './navbar';

const INFURA_ID = '85db4049c00b4783a425412807ff92e9';

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID // required
    }
  }
};

let provider = null;
let web3 = null;
let accounts = null;

const Home = props =>  {
  const [loading, setLoading] = useState(false);

  async function connectWallet() {
    setLoading(true);
    console.log(providerOptions);

    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions // required
    });

    const provider = await web3Modal.connect();
  }

  function print(str) {
    const p = document.createElement("p");
    p.innerText = str;
    document.getElementById("userWalletAddress").appendChild(p);
  }

  return (

    <div className="App">

      <Navbar/>
      <h1>Hello ETH India Hackers!</h1>
      <h2>A basic example of using web3modal with Portis</h2>

      <div className="showPortisBtn">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="primary"
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
    </div>
  );
}

export default Home