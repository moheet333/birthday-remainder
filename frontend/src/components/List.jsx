import React from "react";

function List (props) {
    function handleDelete () {
        props.onDelete(props.id);
    }

    return (
        <div className="list">
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.dob}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default List;