import React, { Component } from "react";
import { Form, Button, Message } from "semantic-ui-react";
import contract from "../../Ethereum/contract";
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
      const addressFrom = "0x0af773490541a1a32e6bce0ac319975b1f4734ca";
      //"0x1206D8C3c73e40c8AfD0D878bbaa28609F9A72a9";
      var privateKey = new Buffer.from(
        "6ceeebd2bf996d1998d2778bb86a1c200d4423f1443dc51ee52c92076380e97b",
        //"e8d1574304a68b5f794d33a842389350d93e49d46b6871571f9b64eaa53131ec",
        "hex"
      );
      var nonceNumber = web3.utils.toHex(
        await web3.eth.getTransactionCount(addressFrom, "pending")
      );
      //console.log(nonceNumber);
      const customCommon = Common.forCustomChain(
        "mainnet",
        {
          name: "localchain",
          networkId: 777,
          chainId: 777,
        },
        "petersburg"
      );

      var myData = contract.methods
        .EmitEvent(
          this.state.type,
          timestamp.toString(),
          this.state.minPay,
          this.state.id,
          tag
        )
        .encodeABI();

      var rawTx = {
        nonce: nonceNumber,
        from: addressFrom,
        gasLimit: web3.utils.toHex(100000),
        gasPrice: web3.utils.toHex(10e9),
        to: contract._address,
        data: myData,
      };

      var tx = new Tx.Transaction(rawTx, { common: customCommon });
      tx.sign(privateKey);
      var serializedTx = tx.serialize();
      
      var receipt = await web3.eth
        .sendSignedTransaction("0x" + serializedTx.toString("hex"))
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
