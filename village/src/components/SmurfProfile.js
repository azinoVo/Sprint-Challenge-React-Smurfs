import React, { Component } from 'react';

class SmurfProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //some state
        }
    }


    render() {
        const id = this.props.match.params.id
        const smurfInfo = this.props.smurfs.filter(smurf => `${smurf.id}` === id)
        console.log(smurfInfo);

        return (

            <div>
                <h1>TESTING</h1>
                {smurfInfo.map(smurf =>  {
                    <div className='smurf-info'>
                        <h2>{smurf.name}</h2>
                        <p>{smurf.age}</p>
                        <p>{smurf.height}</p>
                    </div>
                })}
            </div>
        );
    }
}

export default SmurfProfile;