import { ethers } from "ethers";
import {
	setProvider,
	setLibrary,
	setAccounts,
	setAccount,
	setNetork,
} from "./action";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

const INFURA_ID = "85db4049c00b4783a425412807ff92e9";

const providerOptions = {
	walletconnect: {
		package: WalletConnectProvider, // required
		options: {
			infuraId: INFURA_ID, // required
		},
	},
};

export const connectWallet = async (dispatch) => {
	if (typeof window.ethereum !== "undefined") {
		const web3Modal = new Web3Modal({
			network: "mainnet", // optional
			cacheProvider: true, // optional
			providerOptions, // required
		});

		const provider = await web3Modal.connect();
		const library = new ethers.providers.Web3Provider(provider);
		const accounts = await library.listAccounts();
		const network = await library.getNetwork();
		dispatch(setProvider(provider));
		dispatch(setLibrary(library));
		dispatch(setAccounts(accounts));
		dispatch(setAccount(accounts[0]));
		dispatch(setNetork(network));
	} else {
		window.alert("Please install MetaMask");
		window.location.assign("https://metamask.io/");
	}
};
