import React, { Component } from "react";
import { Button, Card, Grid, Segment } from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "../routes";
import getEvents from "../components/getEvents";
import getTags from "../components/getTags";
import decodeData from "../components/decodeData";

class TestIndex extends Component {
  static async getInitialProps() {
    var results = await getEvents();
    const blockNumber = results.blockNumber;
    const decodedEvents = results.events;
    // console.log(decodedEvents);

    return { blockNumber, decodedEvents };
  }

  renderMarketPlace() {

    const style = {
      color: "#33364d",
    };

    const items = this.props.decodedEvents.map((item) => {
      // console.log(item);
      var dataType = getTags(item);
      const decodedData = decodeData(item);
      const timestamp = new Date(parseInt(decodedData[1])).toLocaleString();
      const cost = parseInt(decodedData[2]._hex,16);

      return {
        header: item.transactionHash,
        meta: "Block: " + item.blockNumber,
        description: (
          <Grid verticalAlign="middle">
            <Grid.Row>
              <Grid.Column floated="left" width={13}>
                <div style={style}>From: 0x{item.topics[1].substr(26, 64).toUpperCase()}</div>
                <div style={style}>Tags: {dataType}</div>
                <div style={style}>ID: {parseInt(item.topics[2], 16)}</div>
                <div style={style}>Cost: {cost} Tokens</div>
                <div style={style}>Timestamp: {timestamp}</div>
              </Grid.Column>
              <Grid.Column floated="right" width={3}>
                <Link route={`/data/${item.transactionHash}`}>
                  <a>
                    <Button content="Buy this data" icon="money" primary />
                  </a>
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        ),
        fluid: true,
        color: 'yellow',
      };
    });

    return (
      <div>
        <Grid verticalAlign="middle">
          <Grid.Row>
            <Grid.Column floated="left" width={13}>
              <h3>Welcome to the Blockchain-powered Data Marketplace!</h3>
              <h3>There are currently {this.props.blockNumber} blocks in the blockchain.</h3>
              <h3>Smart contract address: {this.props.decodedEvents[0].address}.</h3>
              <h3>Event signature: {this.props.decodedEvents[0].topics[0]}.</h3>
              <h3>Showing a total of {this.props.decodedEvents.length} events.</h3>
            </Grid.Column>
            <Grid.Column floated="right" width={3}>
              <Link route="/data/submit">
                <a>
                  <Button
                    content="Submit Data"
                    icon="download"
                    primary
                  />
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Card.Group items={items}/>
      </div>
    );
  }

  render() {
    return (
      <Layout>
        <div>
          {this.renderMarketPlace()}
        </div>
      </Layout>
    );
  }
}
export default TestIndex;
