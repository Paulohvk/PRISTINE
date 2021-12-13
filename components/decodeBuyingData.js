import { ethers } from "ethers";
export default function decodeBuyingData(item) {
    const decoder = new ethers.utils.AbiCoder();
    return (decoder.decode(
        ["address", "uint"],
        item.data
    ));
};