import React, { Component } from 'react';
import { Panel, PanelGroup, Accordion, Grid, Row, Col, Clearfix, Glyphicon } from 'react-bootstrap';

/*function getUTC(offset) {
  return (this.state.date.getUTCHours() + offset) + ':' + this.state.date.getUTCMinutes()
}*/

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      time: "..."
    }

    this.tick = this.tick.bind(this);
  }
  
  getUTC(offset) {
    return (this.state.date.getUTCHours() + offset) + ':' + this.state.date.getUTCMinutes()
  }

  componentDidMount() {
    this.timerID = setInterval( 
      () => this.tick(), 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState ({
      date: new Date(),
      time: this.getUTC(this.props.offset)
    });
  }

  render() {
    return (
      <Col xs={12} md={4} lg={2}>
        <Panel>
          <h1>{this.props.name}</h1>
          <h2>{this.state.time}</h2>
          <Glyphicon className="close-icon" glyph="remove" onClick={this.props.close}/>
        </Panel>
      </Col>
    )
  }
}