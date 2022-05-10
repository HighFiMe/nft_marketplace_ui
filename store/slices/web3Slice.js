import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const INFURA_ID = "85db4049c00b4783a425412807ff92e9";

const providerOptions = {
	walletconnect: {
		package: WalletConnectProvider, // required
		options: {
			infuraId: INFURA_ID, // required
		},
	},
};

const initialState = {
	provider: null,
	library: null,
	accounts: [],
	account: "",
	chainId: "",
};

export const connectWallet = createAsyncThunk("web3Wallet/connectWallet", async (args, thunkAPI) => {
	console.log('args', args);
	console.log('thunkAPI', thunkAPI);
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

		return {provider, library, accounts, network};

		
		console.log(state);
	} else {
		window.alert("Please install MetaMask");
		window.location.assign("https://metamask.io/");
	}
});

const web3Slice = createSlice({
	name: "web3Wallet",
	initialState,
	reducers: {
		
	},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(connectWallet.fulfilled, (state, action) => {
			console.log(action.payload);
			state.provider = action.payload.provider;
			state.library = action.payload.library;
			state.accounts = action.payload.accounts;
			state.account = action.payload.accounts[0];
			state.chainId = action.payload.network.chainId;
			console.log('provider', action.payload.provider);
	    })
  },
});

// export const connectWallet = async (dispatch) =>

// const resetState = () => {
// 	setAccount();
// 	setChainId();
// 	setAccounts([]);
// 	setProvider(null);
// 	setLibrary(null);
// };

// export const handleDisconnect = async () => {
// 	await web3Modal.clearCachedProvider();
// 	resetState();
// };

// export const handleChainChanged = (_hexChainId) => {
// 	setChainId(_hexChainId);
// };

// export const handleAccountsChanged = (accounts) => {
// 	console.log("accountsChanged", accounts);
// 	if (accounts) setAccount(accounts[0]);
// };

// export const subscribeToEvents = async (provider) => {
// 	provider.on("accountsChanged", handleAccountsChanged);
// 	provider.on("chainChanged", handleChainChanged);
// 	provider.on("disconnect", handleDisconnect);
// }

// export const { connectWallet } = web3Slice.actions;
export const getAccount = (state) => state.web3Wallet.account;

export default web3Slice.reducer;
