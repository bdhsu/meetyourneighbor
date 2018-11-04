import React, { Component } from 'react';
import fire from './config/Fire';
import './App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: '',
            social: '',
            humor: '',
            active: '',
            onboardingDone: false
        };
        this.logout = this.logout.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    logout() {
        fire.auth().signOut();
    }

    signup(e){
        this.setState({ onboardingDone: true });
    }

    render() {
        class Neighborhood extends Home {
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
        class Onboarding extends Home {
            render() {
                return (
                    <div id="parent">
                        <div id="child" className="container col-md-6">
                            <form>
                                <h1>Before we begin...</h1>
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

                                <button onClick={this.signup} className="btn btn-success">Signup</button>
                            </form>
                        </div>
                    </div>
                );
            }
        }
        class HomeView extends Home {
            render() {
                const onboardingDone = this.props.onboardingDone;
                if (onboardingDone) {
                    return <Neighborhood />;
                }
                return <Onboarding />;
            }
        }

        return (
            <HomeView onboardingDone={this.state.onboardingDone} />
        );
    }

}

export default Home
