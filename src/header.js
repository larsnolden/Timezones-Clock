import React, { Component } from 'react';
import { Navbar, Jumbotron, Button, Glyphicon } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Timezones</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    )
  }
}