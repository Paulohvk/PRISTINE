pragma solidity ^0.4.25;

contract InterfaceBuyEvent2 {
    function SendPayment(address b, address s, bool v) public;
}

contract BuyEvent2 {
    address buyer;
    address destination;

    mapping(address => mapping (address => uint)) map_buyer_seller_value;
    
    event BuyData(address recipient, uint transferValue, address indexed addressFrom, uint indexed dataID, string indexed timestamp);
    
    function EmitEvent(address recipient, uint transferValue, uint dataID, string timestamp) public payable {
        
        require (msg.sender.balance >= transferValue);
        require(msg.value == transferValue);
        buyer = msg.sender;
        map_buyer_seller_value[buyer][recipient] = transferValue;
        //recipient.transfer(transferValue);
        
        emit BuyData(recipient, transferValue, buyer, dataID, timestamp);
    }

    function SendPayment(address b, address s, bool v) public {
        if (v == true)
            destination = s;
        else
            destination = b;
        destination.transfer(map_buyer_seller_value[b][s]);
    }
}