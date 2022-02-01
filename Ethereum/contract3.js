import web3 from './web3';
import testContract from './build/WhiteList2.json';

const instance = new web3.eth.Contract(
    JSON.parse(testContract.interface),
    "0x0768d5c336dba92e78d47b325d992de16be2027e" // <- White List contract.
);

export default instance;