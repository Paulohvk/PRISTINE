import web3 from './web3';
import testContract from './build/BuyEventTest.json';

const instance = new web3.eth.Contract(
    JSON.parse(testContract.interface),
    "0x171db86cda1452d0ffda3b8fb999452f56f00c52" // <- Buy event contract.
);

export default instance;