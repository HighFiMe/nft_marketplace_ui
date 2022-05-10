import {useState} from 'react'
import { wrapper } from '../store/store'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3 from 'web3';
import {
	web3Loaded,
} from '../store/web3/action';
import { useSelector, useDispatch } from 'react-redux';
import { connectWallet } from '../store/web3/interactions';


function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

const INFURA_ID = '85db4049c00b4783a425412807ff92e9';

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID // required
    }
  }
};


function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <a className="text-xl font-semibold" href="/">LOGO</a>
            </div>
            <div className="flex flex-col ml-4">
                <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Contact
                </a>
            </div>  
        </div>
    )
}

const Navbar = () => {
	
	const dispatch = useDispatch();

	const loadWeb3 = async () => {
		if (typeof window.ethereum !== 'undefined') {
			const web3Modal = new Web3Modal({
				network: "mainnet", // optional
				cacheProvider: true, // optional
				providerOptions // required
			});
			console.log('hi hi')
			const provider = await web3Modal.connect();
			console.log(provider);
			dispatch(web3Loaded(provider))

		} else {
			window.alert('Please install MetaMask');
			window.location.assign('https://metamask.io/');
		}
	};

	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
    return (
	        <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
	            <MobileNav open={open} setOpen={setOpen}/>
	            <div className="w-3/12 flex items-center">
	                <a className="text-2xl font-semibold" href="/">LOGO</a>
	            </div>
	            <div className="w-9/12 flex justify-end items-center">

	                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
	                    setOpen(!open)
	                }}>
	                     hamburger button 
	                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
	                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
	                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
	                </div>

	                <div className="hidden md:flex">
	                    <NavLink to="/contact">
	                        CONTACT
	                    </NavLink>
	                    <NavLink to="/about">
	                        ABOUT
	                    </NavLink>
	                    <button
				          type="button"
				          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				          type="primary"
				          onClick={() => connectWallet(dispatch)}
				        >
				          Connect Wallet
				        </button>
	                </div>
	            </div>
	        </nav>
	    );
}

export default Navbar

