import { ethers } from "ethers";
export default function decodeData(item) {
    const decoder = new ethers.utils.AbiCoder();
    return (decoder.decode(
        ["string", "string", "uint"],
        item.data
    ));
};