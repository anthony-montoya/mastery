import React, { Component } from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import { getUserInfo } from '../../Redux/reducer';

class Profile extends Component {
    constructor() {
        super();

        this.state = {
            userData: {}
        }
    }

    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {
        return (
            <h1>Profile Page</h1>
        )
    }

}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { getUserInfo })(Profile);