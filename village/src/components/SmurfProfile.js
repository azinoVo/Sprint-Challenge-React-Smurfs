import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SmurfProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //some state
        }
    }


    render() {

        return (

            <div>
                {this.props.smurfs.filter(smurf => `${smurf.id}` === this.props.match.params.id).map(smurf => {
                    console.log(smurf.name);
                    return <div>
                        <h3>{smurf.name}</h3>
                        <p>Height: {smurf.height} tall</p>
                        <p>Age: {smurf.age} smurf years old</p>
                        <Link to='/smurfs'><span>Back</span></Link>
                    </div>
                })}
            </div>
        );
    }
}

export default SmurfProfile;