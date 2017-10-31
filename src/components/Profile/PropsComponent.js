import React, { Component } from 'react';

export default class PropsComponent extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    componentDidMount(props) {
        console.log(props);
    }

    render() {
        return(
            <div>{this.props.match.params.name}</div>
        )
    }
} 