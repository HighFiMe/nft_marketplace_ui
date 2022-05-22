// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol"; 
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


/**
 * @title Owner
 * @dev Set & change owner
 */
contract RentingProt_WithPayments is ERC721Holder, ERC721URIStorage {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping(address => mapping(address => mapping(uint256 => uint256))) public nftStorageTracker;
    mapping(uint256 => address) public playerMap;
    mapping(uint256 => address) public playerManager; 
    mapping(uint256 => uint256) public playerSplit; // Since we cannot use decimal places , if x is the percentage split , x*10^3 will be stored. 



    event Deposited(address nftContract, address from, uint256 oldtokenId, uint256 newTokenId, bytes data);
    event Withdraw(address nftContract, address from, uint256 tokenId, uint256 burnedTokenId);
    event NewPlayerManager(uint256 tokenId, address manager);
    event NewPlayer(uint256 tokenId, address player);
    event SplitChanged(uint256 tokenId, uint256 newSplit);
    event RewardsTransfered(address owner, address player, uint256 ownersReward, uint256 playersReward, address erc20Token);

    constructor () ERC721("WrappedNFT", "wNFT")  { }

    // to support receiving ETH by default
    receive() external payable {}
    fallback() external payable {}

    function setPlayerSplit(uint256 tokenId, uint256 split) public {
        require(_isManagerOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");
        require(((split<=100000)&&(split>=0)), "Split should be between 0 and 100");
        playerSplit[tokenId] = split;
        emit SplitChanged(tokenId, split);
    }

    function onERC721Received(address operator,
        address from,
        uint256 tokenId,
        bytes memory data) public override returns (bytes4) {
            
            uint256 newTokenId = mintWrappedNFT(msg.sender, from, tokenId);
            nftStorageTracker[msg.sender][from][tokenId] = newTokenId;
            emit Deposited(msg.sender, from, tokenId, newTokenId, data);
            playerMap[newTokenId] = from;
            playerSplit[tokenId] = 50000;
            return this.onERC721Received.selector;
    }

    function withdraw(address nftContract, uint256 tokenId) public {
        require(nftStorageTracker[nftContract][msg.sender][tokenId] != 0, "Sender did not deposit the NFT");
        emit Withdraw(nftContract, msg.sender, tokenId, nftStorageTracker[nftContract][msg.sender][tokenId]);
        ERC721(nftContract).transferFrom(address(this),
            msg.sender,
            tokenId);
        _burn(nftStorageTracker[nftContract][msg.sender][tokenId]);

        playerMap[tokenId] = address(0);
        nftStorageTracker[nftContract][msg.sender][tokenId] = 0;
        
    }

    function mintWrappedNFT(address nftContract, address from, uint256 tokenId) internal returns(uint256){
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        
        _mint(from, newItemId);
        _setTokenURI(newItemId, ERC721(nftContract).tokenURI(tokenId));

        return newItemId;
    }

    /**
     * @dev See {IERC721-setApprovalForAll}.
     */
    // function setApprovalForAll(address operator, bool approved) public virtual override {
    //     _setApprovalForAll(_msgSender(), operator, approved);
    // }

    function setPlayerManager(uint256 tokenId, address manager) external {
        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");
        playerManager[tokenId] = manager;
        emit NewPlayerManager(tokenId, manager);
    }

    function getPlayerManager(uint256 tokenId) public view returns(address){
        return playerManager[tokenId];
    }

    function setPlayer(uint256 tokenId, address player) external {
        require(_isManagerOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");
        playerMap[tokenId] = player;
        emit NewPlayer(tokenId,  player);
    }

    function _isManagerOrOwner(address spender, uint256 tokenId) internal returns(bool){
        require(_exists(tokenId), "ERC721: operator query for nonexistent token");
        address owner = ERC721.ownerOf(tokenId);
        return (spender == owner || getPlayerManager(tokenId) == spender);
    }

    function getPlayer(uint256 tokenId) public view returns(address) {
        return playerMap[tokenId];
    }

    function rewardToken(uint256 tokenId, address erc20Token, uint256 amount) public {
        uint256 ownersSplit = (100000-playerSplit[tokenId])/1000;
         
        uint256 ownersReward = (amount*ownersSplit)/100;
        uint256 playersReward = (amount*playerSplit[tokenId])/100000;
        ERC20 erc20Contract = ERC20(erc20Token);
        require(erc20Contract.allowance(_msgSender(),address(this))>= amount, "Please allow contract to spend the amount. Not enough allowance");
        
        erc20Contract.transferFrom(_msgSender(), ownerOf(tokenId), ownersReward);
        erc20Contract.transferFrom(_msgSender(), getPlayer(tokenId), playersReward);
        emit RewardsTransfered(ownerOf(tokenId), getPlayer(tokenId), ownersReward, playersReward, erc20Token);
    }

}