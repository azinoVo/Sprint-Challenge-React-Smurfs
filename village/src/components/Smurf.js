import React from 'react';
import { Link } from 'react-router-dom';


const Smurf = props => {
  
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <Link to={`/smurfs/${props.id}`}>
        <button>Learn More</button>
      </Link>
      <button>Exile</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

