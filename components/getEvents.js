import contract from "../Ethereum/contract1";
import web3 from "../Ethereum/web3";
import { ethers } from "ethers";

export default async function getEvents() {
    let provider = new ethers.providers.Web3Provider(web3.currentProvider);

    let abi = [
      "event DataTransfer(string data_type, string timestamp, uint minPayment, address indexed source, uint indexed serialID, uint indexed tag)",
    ];

    let ens = new ethers.Contract(contract._address, abi, provider);

    var filter = ens.filters.DataTransfer();
    filter.fromBlock = 0;
    filter.toBlock = "latest";

    const blockNumber = await provider.getBlockNumber();
    
    const events = (await provider.getLogs(filter)).reverse();

    return {
        blockNumber: blockNumber,
        events: events
    };
};