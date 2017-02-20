import React, { Component } from 'react';
import { Panel, PanelGroup, Accordion, Grid, Row, Col, Clearfix } from 'react-bootstrap';

export default class Clock extends Component {
  render() {
    return (
      <Col xs={4} md={4}>
        <Panel>
          <h1>Berlin</h1>
          <h2>14:44</h2>
        </Panel>
      </Col>
    )
  }
}