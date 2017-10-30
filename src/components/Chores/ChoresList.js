import React, { Component } from 'react';
import ChoreItems from './ChoreItems';

export default class ChoresList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newChore: '',
            chores: [],
            title: 'Chores-List'
        }
        this.handleChange = this.handleChange.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem = (chore) => {
        this.setState({
            chores: this.state.chores.concat([chore]),
            newChore: ''
        })
    }

    removeItem(index) {
        let newArray = this.state.chores;
        newArray.splice(index, 1);
        this.setState({
            chores: newArray
        })
    }

    handleChange(event) {
        this.setState({
            newChore: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Enter a Chore: </h1>
                <input value={this.state.newChore} onChange={this.handleChange} />
                <button onClick={() => this.addItem(this.state.newChore)}>Add Chore</button>
                <ChoreItems title={this.state.title}
                    items={this.state.chores}
                    removeItem={this.removeItem} />
            </div>
        )
    }
}