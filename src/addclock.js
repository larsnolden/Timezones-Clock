import React,  { Component } from 'react';
import {Button, Glyphicon, Col, Clearfix} from 'react-bootstrap';

export default class AddClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
    <Col xs={1}>
      <Button bsSize="large" onClick={this.handleClick}><Glyphicon glyph="plus" /></Button>
    </Col>
    )
  }
}