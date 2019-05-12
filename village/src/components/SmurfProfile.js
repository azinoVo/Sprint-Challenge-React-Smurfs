import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SmurfProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //some state
        }
    }

    exile = event => {
        event.preventDefault();
        this.props.exileSmurf(this.props.match.params.id);
        this.props.history.push("/smurfs")
    }

    render() {

        return (

            <div>
                {this.props.smurfs.filter(smurf => `${smurf.id}` === this.props.match.params.id).map(smurf => {
                    return <div key={smurf.name}>
                        <h3 >{smurf.name}</h3>
                        <p>Height: {smurf.height} tall</p>
                        <p>Age: {smurf.age} smurf years old</p>
                        <Link to='/smurfs'><button>Back</button></Link>
                        {/* <Link to="/smurfUpdate"><button>Update</button></Link> */}
                        <Link to={{
                            pathname: "/smurfUpdate",
                            state: {
                                id: smurf.id
                            }
                        }}><button>Update</button></Link>
                        <button onClick={this.exile}>Exile</button>
                    </div>
                })}
            </div>
        );
    }
}

export default SmurfProfile;