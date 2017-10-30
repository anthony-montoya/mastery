import React from 'react';

export default function Param(props) {
    return <h1>{props.match.params.name}</h1>
}