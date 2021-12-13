const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build'); //Sets path to current directory/build
fs.removeSync(buildPath); //Removes build path

const contractPath = path.resolve(__dirname, 'contracts', 'WhiteList.sol'); //Sets contract path
const source = fs.readFileSync(contractPath, 'utf8'); //Reads contract encoded in utf8
const output = solc.compile(source,1).contracts; //Compiles contract

fs.ensureDirSync(buildPath); //Creates build folder

for (let contract in output) { //Loop for every contract object
    fs.outputJSONSync( //Writes every contract in a separate JSON file
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract] //Content written in JSON file
    );
}