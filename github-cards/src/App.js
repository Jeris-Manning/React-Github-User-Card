import React, { Component } from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myHub: [],
      myRepos: []
    };
  }

  componentDidMount() {
    const axios = require('axios');

    axios
      .get('https://api.github.com/users/jeris-manning/repos')
      .then((res) => {
        console.log(res);
        this.setState({ myRepos: res.data });
        console.log(this.state.myRepos);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get('https://api.github.com/users/jeris-manning')

      .then((res) => {
        console.log(res);
        this.setState({ myHub: res.data });
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='App'>
        <h1>{this.state.myHub.name}</h1>
        <h2>{this.state.myHub.location}</h2>
        <ul>
          <h3>Current Repositories</h3>
          {this.state.myRepos.map((entry) => (
            <li>{entry.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
