
import React, { Component } from 'react';
import logo from '../../logo.svg';
import { connect } from 'react-redux';
import { simpleAction, setValue, fetchUser } from '../../actions/index';
import { Switch, Route, Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
                <Link to={`${this.props.match.url}/anas`}>firstname</Link>
                <Link to={`${this.props.match.url}/manadan`}>lastname</Link>
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
                    <TransitionGroup>
                        <CSSTransition key={this.props.location.key} classNames="fade" timeout={300}>
                            <Switch location={this.props.location}>
                                <Route path={`${this.props.match.url}/anas`} render={()=><Loading text="Anas"/>} />
                                <Route path={`${this.props.match.url}/manadan`} render={()=><Loading text="Manadan"/>} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>            
                </div>
            </div>;
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(Home);