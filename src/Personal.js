import React, { Component } from 'react';
import fire from './config/Fire';
import './App.css';

class Personal extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <h1>Welcome Back this.personal</h1>
                
                <button onClick={this.logout}> Logout</button>
            </div>
        )
        
    }

}

export default Home
