import React, { Component } from 'react';

import './build/App.css';
import Home from './containers/Home/Home';

class App extends Component {
    
    render() {
        return (
            <div className="App-container">
                <Home />
            </div>
        )
    }
}

export default App;
