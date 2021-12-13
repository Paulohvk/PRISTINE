import contract from "../Ethereum/contract2";
import web3 from "../Ethereum/web3";
import { ethers } from "ethers";

export default async function getBuyEvents() {
    let provider = new ethers.providers.Web3Provider(web3.currentProvider);

    let abi = [
      "event BuyData(address recipient, uint transferValue, address indexed addressFrom, uint indexed dataID, string indexed timestamp)",
    ];

    let ens = new ethers.Contract(contract._address, abi, provider);

    var filter = ens.filters.BuyData();
    filter.fromBlock = 0;
    filter.toBlock = "latest";

    const blockNumber = await provider.getBlockNumber();
    
    const events = (await provider.getLogs(filter)).reverse();

    // console.log(events);

    return {
        blockNumber: blockNumber,
        events: events
    };
};