import React, { Component } from 'react';
import './Home.css';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserInfo } from '../../Redux/reducer';

class Home extends Component {
    componentDidMount() {
        this.props.getUserInfo();
    }
    render() {
        return (
            <div className='page_container'>
                <div>
                    <NavBar />
                </div>
                <div className='hero_container'>
                    <h1>Mastery Demo Page</h1>
                </div>
                <div className='content_container'>
                    <div className='content_grid'>
                        <div className='login_box'>
                            <Link to='/chore-list'>
                                <h1>Chore List</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { getUserInfo })(Home);