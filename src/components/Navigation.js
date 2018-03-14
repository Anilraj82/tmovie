import React, { Component } from 'react';
import {Navbar, NavItem } from 'react-materialize'


export class Navigation extends Component {
  render() {
    return (
      <div>
	      <Navbar brand='logo' right>
	        <NavItem href='get-started.html'>Getting started</NavItem>
	        <NavItem href='components.html'>Components</NavItem>
	      </Navbar>
      </div>
    );
  }
}
