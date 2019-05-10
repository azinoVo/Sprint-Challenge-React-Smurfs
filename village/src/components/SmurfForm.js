import React, { Component } from 'react';
import workshop from './workshop.jpeg'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.makeSmurf(this.state);
    this.props.history.push('/smurfs');

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Build-A-Smurf</h1>
        <img width='50%' height='400px' src={workshop} alt="workshop pic"/>
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="...name"
            value={this.state.name}
            name="name"
            type='text'
          />
          <input
            onChange={this.handleInputChange}
            placeholder="...age in Smurf years"
            value={this.state.age}
            name="age"
            type="number"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="...height"
            value={this.state.height}
            name="height"
            type='text'

          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
      </React.Fragment>
    );
  }
}

export default SmurfForm;
