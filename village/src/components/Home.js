import React from 'react';
import {NavLink} from 'react-router-dom';
import './Home.css';
 

function Home () {
    return (
        <div className='home-wrapper'>
            <nav className='navbar'>
                <NavLink exact to='/'><span>Home</span></NavLink>
                <NavLink to='/smurfForm' activeClassName='form-active'><span>Add Smurf</span></NavLink>
                <NavLink exact to='/smurfs'><span>Smurf Population</span></NavLink>
                <span></span>
            </nav>
            <h1>Welcome to the Smurf Village</h1>
            <p>We hope you enjoy your stay. Come say hello to our friends!</p>
        </div>
    );
}

export default Home;