//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract GameToken is ERC20 {


    constructor() public ERC20("GameToken", "GTOK") {}

    function mintTokens(address recipient, uint256 amount)
        public
    {
        _mint(recipient, amount*10**this.decimals());
    }
}