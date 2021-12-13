import web3 from './web3';
import testContract from './build/WhiteList.json';

const instance = new web3.eth.Contract(
    JSON.parse(testContract.interface),
    "0xce005c4d6991a8d628ae511850e02c1d47208ffd" // <- White List contract.
);

export default instance;