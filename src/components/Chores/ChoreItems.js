import React, { Component } from 'react';
import List from './List';

export default class ChoreItems extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <List list={this.props.items}
                    removeItem={this.props.removeItem} />
            </div>
        )
    }
}