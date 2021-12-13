var buyeventtestContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"transferValue","type":"uint256"},{"name":"dataID","type":"uint256"},{"name":"timestamp","type":"string"}],"name":"EmitEvent","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"recipient","type":"address"},{"indexed":false,"name":"transferValue","type":"uint256"},{"indexed":true,"name":"addressFrom","type":"address"},{"indexed":true,"name":"dataID","type":"uint256"},{"indexed":true,"name":"timestamp","type":"string"}],"name":"BuyData","type":"event"}]);
var buyeventtest = buyeventtestContract.new({
     data: '0x608060405234801561001057600080fd5b506102bc806100206000396000f300608060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063074487f414610046575b600080fd5b6100d4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506100d6565b005b823373ffffffffffffffffffffffffffffffffffffffff1631101515156100fc57600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508373ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f19350505050158015610182573d6000803e3d6000fd5b50806040518082805190602001908083835b6020831015156101b95780518252602082019150602081019050602083039250610194565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020826000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fd34b75fdfb75181ca7eef29edfe507da17fbad2e5e0cf2535e4c32ce7949a0308787604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a4505050505600a165627a7a72305820b25a787293b977015c07dd75a7f43728d32f6be762b65000fa72abc55e6ba1200029', 
     arguments: [
     ],
     from: web3.eth.accounts[0], 
     gas: '4700000'
}, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
