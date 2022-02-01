import web3 from './web3';
import testContract from './build/EventTest.json';

const instance = new web3.eth.Contract(
    JSON.parse(testContract.interface),
    "0x787114d9d0eb5c06033c8f2ab918d3da6bb7d238" // <- Data recording - Event contract
);

// import testContract from './build/Test.json';

// const instance = new web3.eth.Contract(
//     JSON.parse(testContract.interface),
//     "0x120dd2b21b93eb3b358fe5e5f6c3b54210337fe5" <- Hello World Contract
// );

export default instance;