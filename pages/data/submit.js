import React, { Component } from "react";
import { Form, Button, Message } from "semantic-ui-react";
import contract from "../../Ethereum/contract1";
import web3 from "../../Ethereum/web3";
import { ethers } from "ethers";
import Common from "ethereumjs-common";
import { bufferToHex, privateToAddress } from "ethereumjs-util";
import Layout from "../../components/Layout";
import { Router } from '../../routes';
var Tx = require("ethereumjs-tx");

class Submit extends Component {
  state = {
    type: "",
    minPay: "",
    id: "",
    errorMessage: "",
    successMessage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "", successMessage: "" });

    const timestamp = +new Date();
    console.log(timestamp);

      switch (this.state.type.toLowerCase()) {
        case "temp":
          var tag = 1;
          break;
        case "hum":
          var tag = 2;
          break;
        case "both":
          var tag = 3;
          break;
        case "pressure":
          var tag = 4;
          break;
        case "test":
          var tag = 5;
          break;
        default:
          var tag = 0;
          break;
      }
      // console.log(tag);

      try {
      const addressFrom = ethereum.selectedAddress;
      const customCommon = Common.forCustomChain(
        "mainnet",
        {
          name: "awschain",
          networkId: 179324865,
          chainId: 179324865,
        },
        "petersburg"
      );

      var minimumPay = web3.utils.toWei(this.state.minPay,'ether');

      var myData = contract.methods
        .EmitEvent(
          this.state.type,
          timestamp.toString(),
          minimumPay,
          this.state.id,
          tag
        )
        .encodeABI();

      var transactionParameters = {
        nonce: '0x00',
        from: addressFrom,
        gasLimit: web3.utils.toHex(100000),
        gasPrice: web3.utils.toHex(10e9),
        to: contract._address,
        data: myData,
      };

      const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });

      // var tx = new Tx.Transaction(rawTx, { common: customCommon });
      // tx.sign(privateKey);
      // var serializedTx = tx.serialize();
      
      var receipt = await web3.eth
        .sendSignedTransaction("0x" + txHash.toString("hex"))
        .on("receipt", console.log);

        this.setState({successMessage: "Transaction successfull, transaction hash: " + receipt.transactionHash});
    
       // Router.pushRoute('/');
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
    this.setState({loading: false})
  };

  render() {
    return (
      <Layout>
        <div>
          <h2>Welcome to the Events Contract!</h2>
          <h3>
            {" "}
            Fill the form below to send data information to the blockchain:{" "}
          </h3>
          <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} success={!!this.state.successMessage}>
            <Form.Input
              fluid
              label={{ children: "Data Type:", style:{ fontSize: '16px' } }}
              placeholder="Temp / Humidity / Both"
              id="datatype"
              value={this.state.type}
              onChange={(event) => this.setState({ type: event.target.value })}
            />
            <Form.Input
              fluid
              label={{ children: "Minimum Payment (in Tokens): ", style:{ fontSize: '16px' } }}
              placeholder="Min. Payment"
              value={this.state.minPay}
              onChange={(event) =>
                this.setState({ minPay: event.target.value })
              }
            />
            <Form.Input
              fluid
              label={{ children: "Serial number: ", style:{ fontSize: '16px' } }}
              placeholder="Serial Number"
              value={this.state.id}
              onChange={(event) => this.setState({ id: event.target.value })}
            />
            <h4></h4>
            <Message error header="Oops!" content={this.state.errorMessage} />
            <Message success header="Completed!" content={this.state.successMessage} />
            <Button loading={this.state.loading} primary>
              Submit!
            </Button>
          </Form>
        </div>
      </Layout>
    );
  }
}

export default Submit;
