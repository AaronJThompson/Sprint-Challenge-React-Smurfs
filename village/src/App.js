import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';

const smurfsAPI = 'http://localhost:3333/smurfs';
const smurfLinks = [
  {
    path: '/',
    label: 'Home',
    exact: true,
  },
  {
    path: '/smurf-form',
    label: 'Add Smurf'
  }
]
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
    smurf.age = parseInt(smurf.age);
    smurf.height = `${smurf.height}cm`
    
    axios
      .post(smurfsAPI, smurf)
      .then(res => this.updateSmurfs(res.data));
  }

  componentDidMount() {
    this.updateSmurfs();
  }

  deleteSmurf = (id) => {
    axios
      .delete(`${smurfsAPI}/${id}`)
      .then(res => this.updateSmurfs(res.data));
  }

  updateSmurf = (id, fields) => {
    axios
      .put(`${smurfsAPI}/${id}`, fields)
      .then(res => this.updateSmurfs(res.data));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar links={smurfLinks} />
          <div style={{height: "3rem"}} />
          <Route exact path='/' render={pr => {
              return(
                <Smurfs smurfs={this.state.smurfs} />
              )
            }}
          />
          <Route path='/smurf-form' render={pr => {
              return(
                <SmurfForm sendSmurf={this.addSmurf.bind(this)}/>
              )
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
