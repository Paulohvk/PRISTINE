pragma solidity ^0.4.25;
contract BuyEventTest {
    
    address buyer;
    
    event BuyData(address recipient, uint transferValue, address indexed addressFrom, uint indexed dataID, string indexed timestamp);
    
    function EmitEvent(address recipient, uint transferValue, uint dataID, string timestamp) public payable {
        
        require (msg.sender.balance >= transferValue);
        buyer = msg.sender;
        recipient.transfer(transferValue);
        
        emit BuyData(recipient, transferValue, buyer, dataID, timestamp);
    }
}