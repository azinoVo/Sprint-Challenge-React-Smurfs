import React from 'react';
import './Home.css';
import village from './village.jpeg';
import { Link } from 'react-router-dom';

 

function Home () {
    return (
        <div className='home-wrapper'>
            <h1>Welcome to the Smurf Village</h1>
            <p>We hope you enjoy your stay. Come say hello to our friends!</p>
            <Link to='/smurfs'><img width='80%' height='600px' src={village} alt="village pic"/></Link>
        </div>
    );
}

export default Home;