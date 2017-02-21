import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

export default class NewClockModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: this.props.showModal
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      showModal: newProps.showModal
    })
  }

  handleClose() {
    if(this.state.showModal) {
      this.setState({
        showModal: false,
        location: null
      });
    }
    this.props.updateShowState(false);
  }

  handleSubmit(event) {
    event.preventDefault();
    //send data to App.js
    this.props.onSubmit(this.state.location);
    this.handleClose();
  }

  handleChange(event) {
    //when new location selected, save in state
    this.setState({
      location: event.target.value
    })
  }

  render() {
    return (
      
    <Modal show={this.state.showModal} onHide={this.handleClose}>
      <Modal.Header>
        <Modal.Title>new Clock</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ControlLabel>Select Country or City</ControlLabel>
        <FormControl componentClass="select" placeholder="select" onChange={this.handleChange.bind(this)}>
          <option>eine Banane</option>
          <option>eine Banane</option>
          <option>eine Banane</option>
        </ FormControl>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={this.handleClose.bind(this)}>Cancel</Button>
        <Button onClick={this.handleSubmit.bind(this)} bsStyle="primary">Add</Button>
      </Modal.Footer>

    </Modal>
    ) 
  }
}