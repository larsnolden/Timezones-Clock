import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header.js';
import Clock from './clock.js';
import AddClock from './addclock.js';
import NewClockModal from './newClockModal.js';
import timezones from './timezones.json'
import { Grid, Row } from 'react-bootstrap';

function getTimeOffset(name) {
  let timezone;
  timezones.forEach((zone) => {
    if(zone.utc){
      zone.utc.forEach((location) => {
        if(location == name) {
          timezone = zone.offset;
        }
      })
    }
  })
  return timezone;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      clocks: [],
      showModal: false
    }

    this.openModal = this.openModal.bind(this)
    this.updateShowState = this.updateShowState.bind(this)
    this.handleNewClock = this.handleNewClock.bind(this)
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
    let newClock = this.state.clocks;
    newClock.push(<Clock name={name} offset={getTimeOffset(name)} />)
    this.setState({ clocks: newClock })
  }


  render() {
    return (
      <div className="App">
        <Header />
        {this.state.clocks}
        <AddClock onClick={this.openModal} />
        <NewClockModal showModal={this.state.showModal} updateShowState={this.updateShowState} onSubmit={this.handleNewClock}/>
      </div>
    );
  }
}

export default App;
