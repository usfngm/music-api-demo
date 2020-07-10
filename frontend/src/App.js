import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import './App.css';

class App extends Component {

  componentDidMount() {
    axios.get('https://api.deezer.com/genre/16/artists').then((result) => {
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <Button type="primary">Buttons</Button>

      </div>
    );
  }
}

export default App;
