import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './build/App.css';

class App extends Component {
    
    render() {
        return (
            <div className="App-container">
                <Link to="/home">Home</Link>
                <Link to="/loading">Loading page</Link>
                {this.props.children}
            </div>
        )
    }
}

export default App;
