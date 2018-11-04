import React, { Component } from 'react';
import fire from './config/Fire';
import './App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
          email: this.props.user.email,
          password: ''
        };
        this.logout = this.logout.bind(this);
        //this.personal = this.personal.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div id="parent">
                <div id="child" className="container col-md-6">
                    <form>
                        <h1>Neighborhood</h1>
                        <h3>Welcome back, {this.state.email}}</h3>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input value={0} onChange={0} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input value={0} onChange={0} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>

                        <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
                        <button onClick={0} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
                        <button onClick={this.logout} className="btn btn-danger"> Logout</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default Home
