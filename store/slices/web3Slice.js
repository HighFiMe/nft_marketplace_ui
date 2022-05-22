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
	web3Modal: null,
};

export const connectWallet = createAsyncThunk(
	"web3Wallet/connectWallet",
	async (args, thunkAPI) => {
		
		const web3Modal = new Web3Modal({
			network: "mainnet", // optional
			cacheProvider: true, // optional
			providerOptions, // required
		});

		const provider = await web3Modal.connect();
		const library = new ethers.providers.Web3Provider(provider);
		const accounts = await library.listAccounts();
		const network = await library.getNetwork();

		return { provider, library, accounts, network, web3Modal };
	}
);

export const connectWalletIfPrevConnected = createAsyncThunk(
	"web3Wallet/connectWalletIfPrevConnected",
	async (args, thunkAPI) => {
		
		const web3Modal = new Web3Modal({
			network: "mainnet", // optional
			cacheProvider: true, // optional
			providerOptions, // required
		});
		console.log(web3Modal.cachedProvider);
		if (web3Modal.cachedProvider) {
			const provider = await web3Modal.connect();
			const library = new ethers.providers.Web3Provider(provider);
			const accounts = await library.listAccounts();
			const network = await library.getNetwork();

			return { provider, library, accounts, network, web3Modal };
		}
	}
);

export const disconnectWallet = createAsyncThunk(
	"web3Wallet/disconnectWallet",
	async (args, thunkAPI) => {
		
		try {
			const state = thunkAPI.getState();
			console.log("handling disconnect");
			await state.web3Reducer.web3Modal.clearCachedProvider();
			return true;
		} catch (err) {
			console.log(err);
		}
	}
);

const web3Slice = createSlice({
	name: "web3Wallet",
	initialState,
	reducers: {
		setChain: (state, action) => {
			console.log("chainChanged", action);
			state.chainId = action.payload._hexChainId;
		},
		setAccount: (state, action) => {
			console.log("accountsChanged here ", action.payload);
			state.account = action.payload.account;
		},
	},

	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder
			.addCase(connectWallet.fulfilled, (state, action) => {
				state.provider = action.payload.provider;
				state.library = action.payload.library;
				state.accounts = action.payload.accounts;
				state.account = action.payload.accounts[0];
				state.chainId = action.payload.network.chainId;
				state.web3Modal = action.payload.web3Modal;
			})
			.addCase(connectWalletIfPrevConnected.fulfilled, (state, action) => {
				if (action.payload) {
					state.provider = action.payload.provider;
					state.library = action.payload.library;
					state.accounts = action.payload.accounts;
					state.account = action.payload.accounts[0];
					state.chainId = action.payload.network.chainId;
					state.web3Modal = action.payload.web3Modal;
				}
			})
			.addCase(disconnectWallet.fulfilled, (state, action) => {
				state.provider = null;
				state.library = null;
				state.accounts = [];
				state.account = "";
				state.chainId = "";
				state.web3Modal = null;
			});
	},
});

export const { setChain, setAccount } = web3Slice.actions;
export const getAccount = (state) => state.web3Wallet.account;

export default web3Slice.reducer;
