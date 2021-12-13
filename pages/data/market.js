//Show all transactions
import React, { Component } from 'react';
import { Card, Grid } from "semantic-ui-react";
import Layout from '../../components/Layout';
import getBuyEvents from '../../components/getBuyEvents';
import decodeBuyingData from '../../components/decodeBuyingData';

class Market extends Component {
    static async getInitialProps() {
        var results = await getBuyEvents();
        const blockNumber = results.blockNumber;
        const decodedEvents = results.events;
        // console.log(decodedEvents);
    
        return { blockNumber, decodedEvents };
      }

    renderTransactions(){
        const style = {
            color: "#33364d",
          };

        const items = this.props.decodedEvents.map((item) => {
            //console.log(item);
            console.log(1);
            const decodedData = decodeBuyingData(item);
            const recipient = decodedData[0];
            const cost = parseInt(decodedData[1]._hex,16);
            const buyer = "0x" + item.topics[1].substr(26,64).toUpperCase();
            const dataID = parseInt(item.topics[2], 16);
            // const timestamp = new Date(parseInt(item.topics[3])).toLocaleString();
            // console.log(Date(parseInt(item.topics[3])).toLocaleString())

            return {
                header: item.transactionHash,
                meta: "Block: " + item.blockNumber,
                description: (
                  <Grid verticalAlign="middle">
                    <Grid.Row>
                      <Grid.Column floated="left" width={13}>
                      <div style={style}>Buyer: {buyer}</div>
                      <div style={style}>Seller: {recipient}</div>
                      <div style={style}>Data ID: {dataID}</div>
                      <div style={style}>Price: {cost} Tokens</div>
                        {/* <div>Timestamp: {timestamp}</div> */}
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
                    <h3>This page shows all the data traded in the market.</h3>
                    <h3>There are currently {this.props.blockNumber} blocks in the blockchain.</h3>
                    <h3>Smart contract address: {this.props.decodedEvents[0].address}.</h3>
                    <h3>Event signature: {this.props.decodedEvents[0].topics[0]}.</h3>
                    <h3>Showing a total of {this.props.decodedEvents.length} events.</h3>
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
            {this.renderTransactions()}
            </div>
        </Layout>
        );
    }
}
export default Market;