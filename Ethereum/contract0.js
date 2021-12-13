import web3 from './web3';
import testContract from './build/Test.json';

const instance = new web3.eth.Contract(
    JSON.parse(testContract.interface),
    "0xf88586785a1a226573bb2216190a35bcf50b0552" //<- Hello World Contract
);

export default instance;