import React, { Component } from 'react';
import './App.css';
import fire from './config/Fire';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
    constructor() {
        super();
        this.state = ({
            user: null,
        });
        this.authListener = this.authListener.bind(this);
    }

    componentDidMount() {
        this.authListener();
    }

    incorrectPassword(props) {
        return <h4>Password incorrect!</h4>;
      }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({ user });
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
                {this.incorrectPassword()}
            }
        });
    }
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route path="/login" component={Login} exact strict render={
                            () => { return (<h1> Welcome to Login </h1>);}
                            }/>
                        <Route path="/signup" component={Signup} exact strict render={
                            () => { return (<h1> Welcome to Signup </h1>);}
                            }/>
                        <Route path="/home" component={Home} exact strict render={
                            () => { return (<h1> Welcome to Home </h1>);}
                            }/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
