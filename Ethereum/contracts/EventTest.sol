pragma solidity ^0.4.25;
contract EventTest {
    event DataTransfer(string data_type, string timestamp, uint minPayment, address indexed source, uint indexed serialID, uint indexed tag);
    
    function EmitEvent(string dtype, string time, uint payment, uint serialID, uint tag) public {

        emit DataTransfer(dtype, time, payment, msg.sender, serialID, tag);
    }
}