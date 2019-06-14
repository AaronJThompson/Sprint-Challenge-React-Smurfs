import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const smurfsAPI = 'http://localhost:3333/smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  updateSmurfs(data) {
    if (!data) {
      axios
        .get(smurfsAPI)
        .then(res => this.setState({smurfs: res.data}));
    } else {
      this.setState({smurfs: data});
    }
  }

  addSmurf(smurf){
    smurf.age = parseInt(smurf.age)
    axios
      .post(smurfsAPI, smurf)
      .then(res => this.updateSmurfs(res.data));
  }

  componentDidMount() {
    this.updateSmurfs();
  }

  render() {
    return (
      <div className="App">
        <SmurfForm sendSmurf={this.addSmurf.bind(this)}/>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
