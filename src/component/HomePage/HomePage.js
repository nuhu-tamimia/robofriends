import React from 'react';
import './HomePage.css';

const HomePage = (props) => {
    return (
        <div className = 'homepage bg-lightest-blue'>
            <button 
            className = 'pa2 ba b--green bg-white pointer dim'
            onClick = { props.isSignedIn }
            >Take a Peep</button>
        </div>
    );
}

export default HomePage;