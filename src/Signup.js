import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from './config/Fire';
import './App.css';
import Login from "./Login.js"
import Home from './Home.js'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.logout = this.logout.bind(this);
        this.state = {
            email: '',
            password: '',
            social: '',
            humor: '',
            active: '',
            profileComplete: ''
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    logout() {
        fire.auth().signOut();
    }

    // Saves user info
    signup(e){
        e.preventDefault();
        this.setState({ [this.state.profileComplete]: 'true' });
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{console.log(u)})
        .catch((error) => {
            console.log(error);
        });

        return (Home);
    }

    render() {
    return (
        <div id="parent">
            <div id="child" className="container col-md-6">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input  value={this.state.email}
                                onChange={this.handleChange}
                                type="email" name="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder={this.state.email}  />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input  value={this.state.password}
                                onChange={this.handleChange}
                                type="password"
                                name="password"
                                class="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password" />
                    </div>

                    <div class="form-group">
                        <label for="social">Social</label>
                        <input  value={this.state.social}
                                onChange={this.handleChange}
                                type="social"
                                name="social"
                                class="form-control"
                                id="humorscore1"
                                placeholder="Rate yoself" />
                    </div>


                    <div class="form-group">
                        <label for="humor">Humor</label>
                        <input  value={this.state.humor}
                                onChange={this.handleChange}
                                type="humor"
                                name="humor"
                                class="form-control"
                                id="humorscore1"
                                placeholder="Rate yoself" />
                    </div>

                    <div class="form-group">
                        <label for="humor">Active</label>
                        <input  value={this.state.active}
                                onChange={this.handleChange}
                                type="active"
                                name="active"
                                class="form-control"
                                id="humorscore1"
                                placeholder="Rate yoself" />
                    </div>

                    <button onClick={"this.signup(); Home;"} className="btn btn-success">Signup</button>
                    <button onClick={this.logout} className="btn btn-danger"> Logout</button>
                </form>
            </div>
        </div>
    );
  }
}
export default Signup;
