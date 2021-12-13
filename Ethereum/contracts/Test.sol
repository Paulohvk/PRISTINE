pragma solidity ^0.4.25;

contract Test {
        
    address public manager;
    string public text;
    
    modifier restricted() {
       require(msg.sender == manager);
       _;
    }
    
    constructor(string memory startingText, address creator) {
    	manager = creator;
    	text = startingText;
    }
    
    function setText (string memory newText) public {
    	text = newText;
    }
}
