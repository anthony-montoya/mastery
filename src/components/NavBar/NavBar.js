import React, { Component } from 'react';
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
                    <h1>Login</h1>
                    </div>  
                </div>
        )
    }
}

export default NavBar;