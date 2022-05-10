export function setProvider(provider) {
  return {
    type: 'SET_PROVIDER',
    provider
  }
}

export function setAccounts(accounts) {
  return {
    type: 'SET_ACCOUNTS',
    accounts
  }
}

export function setLibrary(library) {
  return {
    type: 'SET_LIBRARY',
    library
  }
}

export function setAccount(account) {
  return {
    type: 'SET_ACCOUNT',
    account
  }
}

export function setNetork(network) {
  return {
    type: 'SET_NETWORK',
    network
  }
}

export function setChainId(chainId) {
  return {
    type: 'SET_CHAIN_ID',
    chainId
  }
}