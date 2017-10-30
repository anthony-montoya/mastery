import React, { Component } from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import { getUserInfo } from '../../Redux/reducer';
import NavBar from '../NavBar/NavBar';

class Profile extends Component {

    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {
        return (
            <div>
                <NavBar />
                {
                    this.props.user
                        ?
                        <div>
                            <div className='account_container'>
                                <h1>Profile Page</h1>
                                <h1>Account Information:</h1>
                                {this.props.user ? <img className='avatar' src={this.props.user[0].img} alt='' /> : null}
                                <div>
                                    <p>Username: {this.props.user[0].user_name} </p>
                                    <p>Email: {this.props.user[0].email} </p>
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <div className='account_container'>
                                <h1>Please Log in to see your profile!</h1>
                            </div>
                        </div>
                }
            </div>
        )
    }

}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { getUserInfo })(Profile);