import React, { Component } from 'react';
import './Home.css';
import NavBar from '../NavBar/NavBar';

class Home extends Component {
    render() {
        return (
            <div className='page_container'>
                <NavBar />
                <div className='pokemon_container'>
                    <h1>Home Page</h1>
                </div>
            </div>
        )
    }
}

export default Home;