
import React from "react";

import LoginActions from "../../actions/login-actions"

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.usernameChange = this.usernameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.login = this.login.bind(this);

        this.state = {
            username:"",
            password:""
        };
    }

    usernameChange(e) {
        this.setState({username:e.target.value});
    }

    passwordChange(e) {
        this.setState({password:e.target.value});
    }
    
    login() {
        LoginActions.login({ username: this.state.username, password: this.state.password });
    }

    render() {
        return <div className="login-form">
                    <h1>Hi {this.state.username || "_______"}</h1>
                    <label>Username</label>
                    <input type="text" onChange={this.usernameChange}/>
                    <label>Password</label>
                    <input type="password" onChange={this.passwordChange}/>
                    <button onClick={this.login}>Login</button>
                </div>
    }
}