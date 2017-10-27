import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className='navbar_container'>
                <div id='navbar_login'>
                    <a href={process.env.REACT_APP_LOGIN}>
                        <button>Login</button>
                    </a>
                </div>
                <div className='navbar_profile'>
                    <Link to='/user-profile'>
                        <h1>Profile</h1>
                    </Link>
                </div>
            </div>
        )
    }
}

export default NavBar;