import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from './config/Fire';
import './App.css';
import Login from "./Login.js"

class Signup extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
        user: null,
        email: '',
        password: ''
    };
    this.location = ({
        location: null,
    });
    this.social = ({
        social: null,
    });
    this.activity = ({
        activity: null,
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

//   // Creates user with specificed email and password
//   signup(e){
//     e.preventDefault();
//     fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
//     }).then((u)=>{console.log(u)})
//     .catch((error) => {
//         console.log(error);
//       })

//     // Brings up Sign up page
//     (this.state.user) ? ( <Signup/>) : (<Login />);
//   }


  render() {
    return (
        <div className="col-md-6">
            <form>
                <div class="form-group">
                    <script> {this.state.user } 
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
                    <label for="humor1">Humor</label>
                    <input  value={this.state.password}
                            onChange={this.handleChange}
                            type="password" 
                            name="password"
                            class="form-control" 
                            id="humorscore1"
                            placeholder="Rate yoself" />
                </div>


                <div class="form-group">
                    <label for="humor1">Humor</label>
                    <input  value={this.state.password}
                            onChange={this.handleChange}
                            type="password" 
                            name="password"
                            class="form-control" 
                            id="humorscore1"
                            placeholder="Rate yoself" />
                </div>

                 <div class="form-group">
                    <label for="humor1">Humor</label>
                    <input  value={this.state.password}
                            onChange={this.handleChange}
                            type="password" 
                            name="password"
                            class="form-control" 
                            id="humorscore1"
                            placeholder="Rate yoself" />
                </div>

      <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
      <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
 </form>
 
 </div>
    );
  }
}
export default Login;