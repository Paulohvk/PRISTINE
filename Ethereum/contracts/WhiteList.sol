pragma solidity ^0.4.25;

contract WhiteList {
    mapping(address => mapping (address => bool)) add_wl;
    
    function setWhiteList(address buyer) public {
        add_wl[msg.sender][buyer] = true;
    }
    
    function getWhiteList(address seller, address buyer) public view returns(bool) {
        return (add_wl[seller][buyer]);
    }
    
    function removeWhiteList (address buyer) public {
        add_wl[msg.sender][buyer] = false;
    }
}