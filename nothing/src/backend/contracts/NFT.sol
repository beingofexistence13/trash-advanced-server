// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFT is ERC721URIStorage {
    uint public tokenCount; //inicijalizira se sa 0 interno

    constructor() ERC721("CRO NFT", "CRO") {}

    function mint(string memory _tokenURI) external returns (uint) {
        tokenCount++;

        _safeMint(msg.sender, tokenCount);
        _setTokenURI(tokenCount, _tokenURI);

        return (tokenCount);
    }
}
