import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from './config/Fire';
import './App.css';
import Login from "./Login.js"
import Home from './Home.js'
import App from './App';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: '',
            address: '',
            buildingFloor:'',
            outdoors: '',
            cooking: '',
            artsCraft: '',
            movies: '',
            gym: '',
            games: '',
            profileComplete: ''
        };
    }

    // Handles changes in any of the target ids
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.name });
    }

    // Handles submission changes that are different from the default log in page
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
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

        return <Home> Home.state.user= </Home>;
    }

    render() {
    return (
        <div id="parent">
            <div id="child" className="container col-md-6">
                <form onSubmit={this.handleSubmit}>
                    <h1> Let's get to know you!</h1>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input  value={this.state.email}
                                onChange={this.handleChange}
                                type="email" 
                                name="email"
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
                        <label for="address">Address</label>
                        <input  value={this.state.social}
                                onChange={this.handleChange}
                                type="address"
                                name="address"
                                class="form-control"
                                id="address"
                                placeholder="Address" />
                    </div>


                    <div class="form-group">
                        <label for="buildingFloor">Building Floor Number</label>
                        <input  value={this.state.social}
                                onChange={this.handleChange}
                                type="buildingFloor"
                                name="buildingFloor"
                                class="form-control"
                                id="buildingFloor"
                                placeholder="Floor Number" />
                    </div>
                    

                    <div class="form-group">
                        <label for="outdoors">Outdoors</label>
                        <input  value={this.state.humor}
                                onChange={this.handleChange}
                                type="outdoors"
                                name="outdoors"
                                class="form-control"
                                id="outdoors"
                                placeholder="Rate yoself" />
                    </div>


                    <div class="form-group">
                        <label for="movies">Movies</label>
                        <input  value={this.state.humor}
                                onChange={this.handleChange}
                                type="movies"
                                name="movies"
                                class="form-control"
                                id="movies"
                                placeholder="Rate yoself" />
                    </div>


                    <div class="form-group">
                        <label for="cooking">Cooking</label>
                        <input  value={this.state.active}
                                onChange={this.handleChange}
                                type="cooking"
                                name="cooking"
                                class="form-control"
                                id="cooking"
                                placeholder="Rate yoself" />
                    </div>


                    <div class="form-group">
                        <label for="gym">Going to the Gym</label>
                        <input  value={this.state.active}
                                onChange={this.handleChange}
                                type="gym"
                                name="gym"
                                class="form-control"
                                id="gym"
                                placeholder="Rate yoself" />
                    </div>


                    <div class="form-group">
                        <label for="artsCraft">Arts and Craft</label>
                        <input  value={this.state.social}
                                onChange={this.handleChange}
                                type="buildingFloor"
                                name="buildingFloor"
                                class="form-control"
                                id="buildingFloor"
                                placeholder="Rate yoself" />
                    </div>

                    
                    <div class="form-group">
                        <label for="games">Video Games</label>
                        <input  value={this.state.active}
                                onChange={this.handleChange}
                                type="games"
                                name="games"
                                class="form-control"
                                id="games"
                                placeholder="Rate yoself" />
                    </div>

                    <button onClick={"this.signup(); Home;"} className="btn btn-success">Signup</button>
                </form>
            </div>
        </div>
    );
  }
}
export default Signup;
