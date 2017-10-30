import React, { Component } from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import { getUserInfo } from '../../Redux/reducer';
import NavBar from '../NavBar/NavBar';
import PropsComponent from './PropsComponent';

class Profile extends Component {

    componentDidMount() {
        this.props.getUserInfo();
    }
    //Component did mount is a lifecycle method that is ran once this component has been mounted. 
    //Within this it can run any other functions needed to run upon mount of this component.

    //Component will recieve props is a lifecycle method that makes it easier to pass data in props from one component to another and can from there
    //use that data sent down as props however you need to in that other component and is ran when a component is going to receive any new props.

    render() {
        const { user_name } = this.props.user[0];
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
                                    <p>Username: {user_name} </p>
                                    <p>Email: {this.props.user[0].email} </p>

                                    <h1>Is props a match? {this.props.match.isExact.toString()}</h1>
                                    <PropsComponent username={this.props.user[0].user_name} match={this.props.match} />
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
// { getUserInfo } = mapDispatchToProps