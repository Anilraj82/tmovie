import React, { Component } from 'react';
import {Navbar, NavItem, Icon, Dropdown} from 'react-materialize'


export class Header extends Component {
  render() {
      console.log('hello')
    return (
      <div>
        <Navbar className='App' brand='TMDB' right>
            <Dropdown trigger={
                <NavItem href=''><Icon>add</Icon></NavItem>
                }>
                <NavItem> Add Movie </NavItem>
                <NavItem> Add Actors</NavItem>
            </Dropdown>
            <NavItem href='/movie'>Movies</NavItem>
            <NavItem href='/people'>People</NavItem>
            <NavItem href='/contact'>Contact</NavItem>
        </Navbar>
      </div>
    );
  }
}
