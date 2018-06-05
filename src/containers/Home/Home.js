
import React, { Component } from 'react';
import logo from '../../logo.svg';
import { connect } from 'react-redux';
import { simpleAction, setValue, fetchUser } from '../../actions/index';
import { Route } from 'react-router';

import Loading from '../../components/Loading/Loading';

class Home extends Component {
    componentDidMount() {
        
    }
    constructor(props) {
        super(props);
        this.state = {name: 'create-react-app'};
    }
    changeName = () => {
        this.setState({
            name: 'wologarian'
        });
    }
    loadAPI = () => {
        this.props.dispatch(simpleAction());
    }
    setShowPopup = () => {
        this.props.dispatch(setValue("showPop", !this.props.reducer1.showPop));
    }
    fetchUser = () => {
        this.props.dispatch(fetchUser());
    }
    render() {
        const { isLoading } = this.props.reducer1;
        const { name } = this.state;
        return isLoading 
        ?   <Loading />
        :   <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to { name }</h1>
                    <button onClick={this.loadAPI}>Test redux action</button>
                </header>
                <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
                <button onClick={this.changeName}>Click</button>
                <button onClick={this.setShowPopup}>Set popup bool</button>
                <button onClick={this.fetchUser}>Fetch users</button>
                <p>{this.props.reducer1.data.length}</p>
                <div className="userContainer left">
                {
                    this.props.reducer1.data.map( user => {
                        return (
                            <div className="user" key={ user.id }>
                                <span>{ user.name }</span>--------<span>{ user.email }</span>
                            </div> 
                        )
                    })
                }
                </div>
                <div className="home-child">
                    <Route path={`${this.props.match.url}/page1`} render={()=><Loading text="page 1"/>} />
                </div>
            </div>;
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(Home);