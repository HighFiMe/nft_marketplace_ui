
export default function web3(state = {}, action) {
  switch (action.type) {
    case 'SET_PROVIDER': {
      console.log(action);
      return { ...state,  provider: action.provider }
    }
    case 'SET_ACCOUNTS': {
      console.log(action);
      return { ...state,  accounts: action.accounts }
    }
    case 'SET_LIBRARY': {
      console.log(action);
      return { ...state,  library: action.library }
    }
    case 'SET_ACCOUNT': {
      console.log(action);
      return { ...state,  account: action.account }
    }
    case 'SET_NETWORK': {
      console.log(action);
      return { ...state,  network: action.network }
    }
    default:
      return state
  }
}

//BLS signatures 