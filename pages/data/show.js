import React, { Component } from "react";
import { Form, Button, Message, Table, Grid, Modal } from "semantic-ui-react";
import Layout from "../../components/Layout";
import getEvents from "../../components/getEvents";
import getTags from "../../components/getTags";
import decodeData from "../../components/decodeData";
import web3 from "../../Ethereum/web3";
import contract2 from "../../Ethereum/contract2";
import Common from "ethereumjs-common";
var Tx = require("ethereumjs-tx");

class Show extends Component {

  state = {
    buyer_add: "",
    errorMessage: "",
    successMessage: "",
    loading: false,
  };

  static async getInitialProps(props) {
    const address = props.query.address;
    const results = await getEvents();
    const decodedEvents = results.events;
    const aux = (item) => item.transactionHash === address;
    const index = decodedEvents.findIndex(aux);
    const event = decodedEvents[index];
    return { event };
  }

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "", successMessage: "" });

    const timestamp = +new Date();
    // console.log(timestamp);

    const e = this.props.event;
    const decodedData = decodeData(e);

    const dataID = parseInt(e.topics[2], 16);
    const addressFrom = this.state.buyer_add;
    const transferValue = decodedData[2]._hex;
    const recipient = "0x" + e.topics[1].substr(26, 64);

    // const recipient = "0xa1b9207bff69cc6149c13b820576403631f0b39d";
    // console.log('1 ' + dataID);
    // console.log('2 ' + addressFrom);
    // console.log('3 ' + transferValue);
    // console.log('4 ' + recipient);

    var privateKey = new Buffer.from(
      "51d6a4bb8508c91a3d78de5d4a137c83bb6f602998937e2c034f1c7eb656609c",
      //"e8d1574304a68b5f794d33a842389350d93e49d46b6871571f9b64eaa53131ec",
      "hex"
    );

    try {
    var nonceNumber = web3.utils.toHex(
      await web3.eth.getTransactionCount(addressFrom, "pending")
    );
    console.log(nonceNumber);
    const customCommon = Common.forCustomChain(
      "mainnet",
      {
        name: "localchain",
        networkId: 777,
        chainId: 777,
      },
      "petersburg"
    );

    var myData = contract2.methods
      .EmitEvent(
        recipient,
        transferValue,
        dataID,
        timestamp.toString(),
      )
      .encodeABI();

    var rawTx = {
      nonce: nonceNumber,
      from: addressFrom,
      gasLimit: web3.utils.toHex(100000),
      gasPrice: web3.utils.toHex(10e9),
      to: contract2._address,
      data: myData,
      value: transferValue
    };

    var tx = new Tx.Transaction(rawTx, { common: customCommon });
    tx.sign(privateKey);
    var serializedTx = tx.serialize();

    var receipt = await web3.eth
      .sendSignedTransaction("0x" + serializedTx.toString("hex"))
      .on("receipt", console.log);

      this.setState({successMessage: "Transaction successfull, transaction hash: " + receipt.transactionHash});
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
    this.setState({loading: false})
  };

  render() {
    const e = this.props.event;
    const decodedData = decodeData(e);
    const txHash = e.transactionHash;
    const blockHash = e.blockHash;
    const blockNumber = e.blockNumber;
    const dataOwner = "0x" + e.topics[1].substr(26, 64).toUpperCase();
    const dataType = getTags(e);
    const dataID = parseInt(e.topics[2], 16);
    const cost = decodedData[2]._hex;
    const timestamp = new Date(parseInt(decodedData[1])).toLocaleString();

    const colour = "yellow";

    return (
      <Layout>
        <div>
          <Table color={colour} key={colour}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Property</Table.HeaderCell>
                <Table.HeaderCell>Value</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>Transaction Hash:</Table.Cell>
                <Table.Cell>{txHash}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Block Hash:</Table.Cell>
                <Table.Cell>{blockHash}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Block Number:</Table.Cell>
                <Table.Cell>{blockNumber}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Data Owner:</Table.Cell>
                <Table.Cell>{dataOwner}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Data Tags:</Table.Cell>
                <Table.Cell>{dataType}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Data ID:</Table.Cell>
                <Table.Cell>{dataID}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Data Cost:</Table.Cell>
                <Table.Cell>{parseInt(cost, 16)} Tokens</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Timestamp:</Table.Cell>
                <Table.Cell>{timestamp}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} success={!!this.state.successMessage}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                    <Form.Input
                      flex="true"
                      label={{ children: "Your Address:", style:{ fontSize: '16px' } }}
                      placeholder="0xabcd1234"
                      id="buyer_add"
                      value={this.state.buyer_add}
                      onChange={(event) => this.setState({ buyer_add: event.target.value })}
                    />
              </Grid.Column>
              <Grid.Column verticalAlign='middle' width={5}>
                <Button loading={this.state.loading} primary>Buy for {parseInt(cost, 16)} Tokens</Button>
              </Grid.Column>
            </Grid.Row>
            <h4></h4>
            <Message error header="Oops!" content={this.state.errorMessage} />
            <Message success header="Completed!" content={this.state.successMessage} />
          </Grid>
          </Form>
          </div>
      </Layout>
    );
  }
}
export default Show;
