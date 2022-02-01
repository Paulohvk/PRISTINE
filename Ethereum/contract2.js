import web3 from './web3';
import testContract from './build/BuyEvent2.json';

const instance = new web3.eth.Contract(
    JSON.parse(testContract.interface),
    "0x927c12ea2582e26c7fc0cdea0e48b46c6788f44e" // <- Buy event contract.
);

export default instance;