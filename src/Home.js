import React, { Component } from 'react';
import fire from './config/Fire';
import './App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        //this.personal = this.personal.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <script>
                    var user;
                    user= fire.auth().UserInfo#displayName;
                </script>
                <h1>Welcome to Home <script>user</script> Hi</h1>
                
                <button onClick={this.logout}> Logout</button>
            </div>
        )
        
    }

}

export default Home