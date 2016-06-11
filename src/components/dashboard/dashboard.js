import React from "react";
import {browserHistory} from "react-router";
import UserStore from "../../stores/user-store";

function getStore() {
    return {
        user:UserStore.getUser()
    }
}

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user:""
        };

        this._onChange = this._onChange.bind(this);
        this.goToLogin = this.goToLogin.bind(this);
        this.goToHome = this.goToHome.bind(this);
        this.goToCustom = this.goToCustom.bind(this);
    }

    componentWillUpdate(prevProps, prevState) {
        if (prevState.user !== this.state.user) {
            browserHistory.push("");
        }
    }

    componentDidMount() {
        UserStore.addChangeListener(this._onChange);
    }

    componentWillUnmount(){
        UserStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(getStore());
    }

    goToHome() {
        browserHistory.push("");
    }

    goToLogin() {
        if (this.state.user === "") {
            browserHistory.push("/login");
        } else {
            // Logout the user.
        }
    }

    goToCustom() {
        browserHistory.push("/custom");
    }

    render() {
        let user = null;

        if (this.state.user) {
            user = <div className="username">{this.state.user}</div>
        }

        return <div className="dashboard">
            <nav>
                <ul className="left-menu">
                    <li onClick={this.goToHome}>Home</li>
                    <li onClick={this.goToLogin}>Login</li>
                    <li onClick={this.goToCustom}>Custom</li>
                </ul>
                {user}
            </nav>
            <div className="content">
            {
                this.props.children
            }
            </div>
        </div>
    }
}