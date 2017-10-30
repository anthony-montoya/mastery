import React from 'react';

function List(props) {
    let choreList = props.list.map((chore, i) => {
        return (
            <div key={i}>
                <li>{chore}</li>
                <button onClick={() => props.removeItem(i)}>Remove</button>
            </div>
        )
    })

    return (
        <div>
            <ul>
                {choreList}
            </ul>
        </div>
    )
}

export default List;