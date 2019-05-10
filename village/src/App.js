import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfProfile from './components/SmurfProfile';
import Home from './components/Home';

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
  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response);
        this.setState({ smurfs: response.data });
        console.log(`Put Request: ${response.data}`)

      })
      .catch(error => {
        console.log(error);
      })
  }

  makeSmurf = smurf => {
    axios.post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        console.log(response);
        this.setState({ smurfs: response.data });
        console.log(`Post Request: ${response.data}`)
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <nav className='navbar'>
          <NavLink exact to='/'><span>Home</span></NavLink>
          <NavLink to='/smurfForm' activeClassName='form-active'><span>Add Smurf</span></NavLink>
          <NavLink exact to='/smurfs'><span>Smurf Population</span></NavLink>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path='/smurfs' render={props => (<Smurfs {...props} smurfs={this.state.smurfs} />)} />
        <Route path='/smurfs/:id' render={props => (<SmurfProfile {...props} smurfs={this.state.smurfs} />)} />
        <Route path='/smurfForm' render={props => (<SmurfForm {...props} makeSmurf={this.makeSmurf} />)} />

        {/* <SmurfForm makeSmurf={this.makeSmurf}/> */}
        {/* <Smurfs smurfs={this.state.smurfs} /> */}
      </div>
    );
  }
}

export default App;
