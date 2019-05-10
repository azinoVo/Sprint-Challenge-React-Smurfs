import React, { Component } from 'react';

class SmurfUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }


  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  update = event => {
      event.preventDefault();
      this.props.modifySmurf(this.props.location.state,this.state);
      this.props.history.push("/smurfs")
  }

  render() {
    return (
      <React.Fragment>
        <h1>Modify-A-Smurf</h1>
      <div className="SmurfForm">
        <form onSubmit={this.update}>
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
          <button type="submit">Update Info</button>
        </form>
      </div>
      </React.Fragment>
    );
  }
}

export default SmurfUpdate;
