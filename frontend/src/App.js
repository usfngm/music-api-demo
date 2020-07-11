import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import Home from './Home';
import './App.css';

class App extends Component {

  componentDidMount() {
    axios.get('http://localhost:8080/genre').then(({data}) => {
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
