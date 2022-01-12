pragma solidity ^0.4.25;
import "./BuyEvent2.sol";

contract WhiteList2 {

    address BuyContractAdd;

    mapping(address => mapping (address => bool)) add_wl;
    
    function setAddress(address _t) public {
        BuyContractAdd = _t;
    }

    function setWhiteList(address buyer, bool value) public {
        add_wl[msg.sender][buyer] = value;
        InterfaceBuyEvent2 i = InterfaceBuyEvent2(BuyContractAdd);
        return i.SendPayment(buyer, msg.sender, value);
    }
    
    function getWhiteList(address seller, address buyer) public view returns(bool) {
        return (add_wl[seller][buyer]);
    }
    
    function removeWhiteList (address buyer) public {
        add_wl[msg.sender][buyer] = false;
    }
}