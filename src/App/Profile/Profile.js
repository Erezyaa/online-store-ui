import React, { Component } from 'react';
import UserService from '../services/user.service';

export class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    componentDidMount() {
        UserService
            .me()
            .then(response => response.json())
            .then(user => {
                this.setState({
                    profile: user
                });
                console.log(user);
            });
    }

    render() {
        return (
            <div className="container">
                <h1>User</h1>

            </div>
        )
    }
}

export default Profile;
