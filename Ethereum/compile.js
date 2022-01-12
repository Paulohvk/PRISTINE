const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build'); //Sets path to current directory/build
//fs.removeSync(buildPath); //Removes build path

const contractPath = path.resolve(__dirname, 'contracts', 'BuyEvent2.sol'); //Sets contract path
const source = fs.readFileSync(contractPath, 'utf8'); //Reads contract encoded in utf8
const output = solc.compile(source,1).contracts; //Compiles contract

fs.ensureDirSync(buildPath); //Creates build folder

for (let contract in output) { //Loop for every contract object
    fs.outputJSONSync( //Writes every contract in a separate JSON file
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract] //Content written in JSON file
    );
}


// TO COMPILE A CONTRACT THAT IMPORTS ANOTHER CONTRACT, DO LIKE THIS
// const contractPath = path.resolve(__dirname, 'contracts', 'WhiteList2.sol'); //Sets contract path
// const contractPath2 = path.resolve(__dirname, 'contracts', 'BuyEvent2.sol'); //Sets contract path
// const source = fs.readFileSync(contractPath, 'utf8'); //Reads contract encoded in utf8
// const source2 = fs.readFileSync(contractPath2, 'utf8'); //Reads contract encoded in utf8
// const input = {
//     sources: {
//         'WhiteList2.sol': source,
//         'BuyEvent2.sol': source2
//     }
// }
// const output = solc.compile(input,1).contracts; //Compiles contract