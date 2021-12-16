import React, { Component } from 'react';
import {Form, Button, Input, Message} from 'semantic-ui-react';
import contract from '../Ethereum/contract0';
import web3 from '../Ethereum/web3';
import Common from 'ethereumjs-common';
import { bufferToHex, privateToAddress } from 'ethereumjs-util'
var Tx = require('ethereumjs-tx');

class TestIndex extends Component {

    // static async getInitialProps() {
    //     const accounts = await web3.eth.getAccounts();
    //     console.log(accounts[0]);

    //     return {accounts};
    // }

    // onClick = async(event) => {
    //     const account = this.props.accounts[0];
    //     console.log(account);
    //     await web3.eth.sendTransaction({from: account,
    //         to: "0x1206D8C3c73e40c8AfD0D878bbaa28609F9A72a9",
    //         value: web3.utils.toWei("50", 'ether')})
    //         .on('receipt', console.log);
    // }

    onClick2 = async(event) => {
        const text = await contract.methods.text().call();
        window.alert(text);
    }

    // onClick3 = async(event) => {
    //     const account = this.props.accounts[0];
    //     console.log(account);
    //     await contract.methods.setText("Test 1234")
    //     .send({from: account, gas: '100000'});
    // }

    // onClick4 = async(event) => {
    //     const customCommon = Common.forCustomChain(
    //         'mainnet',
    //         {
    //           name: 'TestNetwork',
    //           networkId: 7777,
    //           chainId: 7777,
    //         },
    //         'petersburg',
    //       )

    //     var privateKey = new Buffer('e8d1574304a68b5f794d33a842389350d93e49d46b6871571f9b64eaa53131ec', 'hex')

    //     const addressFrom = '0x1206D8C3c73e40c8AfD0D878bbaa28609F9A72a9';

    //     const addressTo = '0xdf41d535f8c4ddb21270c0e69136a02608ac09ea';
        
    //     var nonceNumber = web3.utils.toHex(await web3.eth.getTransactionCount(addressFrom, 'pending'));
    //         console.log(nonceNumber);
    //     var rawTx = {
    //         nonce: nonceNumber,
    //         from: addressFrom,
    //         gasLimit: web3.utils.toHex(25000),
    //         gasPrice: web3.utils.toHex(10e9),
    //         to: addressTo,
    //         value: web3.utils.toHex(web3.utils.toWei('20', 'ether')),
    //     }

    //     console.log(rawTx);

    //     var tx = new Tx.Transaction(rawTx,{common: customCommon});

    //     console.log(tx);

    //     tx.sign(privateKey);

    //     if (
    //         tx.validate() &&
    //         bufferToHex(tx.getSenderAddress()) === bufferToHex(privateToAddress(privateKey))
    //       ) {
    //         console.log('Valid signature')
    //       } else {
    //         console.log('Invalid signature')
    //       }
        
    //     console.log("The transaction's chain id is", tx.getChainId())

    //     var serializedTx = tx.serialize();

    //     await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
    //     .on('receipt', console.log);
    // }

    render() {
        const ethereumButton = document.querySelector('.enableEthereumButton');

        ethereumButton.addEventListener('click', () => {
        //Will Start the metamask extension
        ethereum.request({ method: 'eth_requestAccounts' });
        });

        //const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        
        //const account = accounts[0];

        return (<div>
            <div>Hello from Git to Hostgator!</div>
            <div>Welcome to the local Blockchain Network!</div>
            <h3> Make a transaction: </h3>
            <Button type='submit' onClick={this.onClick}>Submit</Button>

            <h3> Check Text: </h3>
            <Button type='submit' onClick={this.onClick2}>Check Text</Button>
            <h3> Set new text: </h3>
            <Button type='submit' onClick={this.onClick3}>Submit</Button>
            <h3> Send Raw transaction: </h3>
            <Button type='submit' onClick={this.onClick4}>Submit</Button>
            </div>
        );
    }
}

export default TestIndex;