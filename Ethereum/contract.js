import web3 from './web3';
import testContract from './build/EventTest.json';

const instance = new web3.eth.Contract(
    JSON.parse(testContract.interface),
    "0xce45befd75ea1159a6c29f12afffaa3e5f5d816e" // <- Data recording - Event contract
);

// import testContract from './build/Test.json';

// const instance = new web3.eth.Contract(
//     JSON.parse(testContract.interface),
//     "0x120dd2b21b93eb3b358fe5e5f6c3b54210337fe5" <- Hello World Contract
// );

export default instance;