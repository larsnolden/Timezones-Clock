import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './header.js';
import Clock from './clock.js';
import AddClock from './addclock.js';
import NewClockModal from './newClockModal.js';

import { Grid, Row } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clocks: null,
      showModal: false
    }

    this.openModal = this.openModal.bind(this)
    this.updateShowState = this.updateShowState.bind(this)
  }

  openModal() {
    console.log(this.state.showModal)
    this.setState({ showModal: true })
  }

  // keeping the Modal 'showModal' state with this 'showModal' in sync
  updateShowState(state) {
    this.setState({ showModal: state})
  }

  handleNewClock (name) {
    console.log(name);
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Clock />
        {this.state.clocks}
        <AddClock onClick={this.openModal} />
        <NewClockModal showModal={this.state.showModal} updateShowState={this.updateShowState} onSubmit={this.handleNewClock}/>
      </div>
    );
  }
}

export default App;
