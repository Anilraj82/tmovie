import React, { Component } from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import {SearchMovie} from "./components/SearchMovie";



export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <SearchMovie/>
      </div>
    );
  }
}
