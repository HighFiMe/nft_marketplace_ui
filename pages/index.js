import WalletConnectProvider from "@walletconnect/web3-provider";
import { useState } from "react";
const INFURA_ID = "85db4049c00b4783a425412807ff92e9";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import SearchBox from "../components/Home/SearchBox";
import OpenCollections from "../components/Home/OpenCollections";
import Hero from "../components/Home/Hero";
const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
            infuraId: INFURA_ID, // required
        },
    },
};

let provider = null;
let web3 = null;

let accounts = null;

const Home = (props) => {
    const [loading, setLoading] = useState(false);

    function print(str) {
        const p = document.createElement("p");
        p.innerText = str;
        document.getElementById("userWalletAddress").appendChild(p);
    }

    return (
        <>
            <div className="bg-home-hero">
                <Header />
                <Sidebar />
                <Hero />
                <SearchBox />
                <OpenCollections />
            </div>
        </>
    );
};

export default Home;
